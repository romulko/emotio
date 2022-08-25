import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Behaviour,
  Mind,
  AddEmotionInput,
  Abc,
  AbcBehaviourInput,
  AbcDeleteInput,
  AbcEmotion,
  AbcMindInput,
  AbcUpdateSituationInput,
  AbcLifeArea,
  AddLifeAreaInput,
  DeleteLifeAreaInput,
  AbcDeleteAudioInput,
  Audio,
  AbcUpdateEmotionIntensityInput,
  AbcAddAudioTextHighlightInput,
  AbcDeleteAudioTextHighlightInput,
  AudioTextHighlight,
  AudioTextHighlightWithMind,
  MindWithAudioTextHighlight,
  AbcUpdateConsequencesInput,
  AbcDeleteMindInput,
} from '../enity';
import { Model } from 'mongoose';
import { User } from '../../user/entity';
import { GraphQLUpload } from 'graphql-upload';
import { createWriteStream, existsSync, mkdirSync } from 'fs';
import { ConfigService } from '@nestjs/config';
import { exec } from 'child_process';
import { MessageService } from '../../messages';
import {
  AbcStatistic,
  EmotionStatisticElement,
  LifeAreaStatisticElement,
} from '../enity/statistic.entity';
import { EmotionService } from '../../emotion/service';
import { LifeAreaService } from '../../lifeArea/service';
import { ConsumeMessage } from 'amqplib';
import { UserService } from '../../user/service';
import { last } from '../../../utils/array.utils';
import { DialogueService } from '../../dialogue/service';
import { DialogueType } from '../../dialogue/objectType/enum';

const QUEUE_VOICE_RECOGNIZE_RESPONSE = 'voice-recognize-response';

@Injectable()
export class AbcService {
  private readonly logger = new Logger(AbcService.name);

  constructor(
    @InjectModel(Abc.name) private readonly abcModel: Model<Abc>,
    private readonly userService: UserService,
    private readonly configService: ConfigService,
    private readonly messageService: MessageService,
    private readonly emotionService: EmotionService,
    private readonly lifeAreaService: LifeAreaService,
    private readonly dialogueService: DialogueService,
  ) {
    messageService
      .getClient()
      .addSetup((channel) =>
        channel.consume(QUEUE_VOICE_RECOGNIZE_RESPONSE, (msg) =>
          this.voiceRecognizeResponseHandler(msg),
        ),
      )
      .then((value) => this.logger.log(`client addSetup successful ${value}`))
      .catch((reason) => this.logger.error(`client addSetup catch ${reason}`));
  }

  private async voiceRecognizeResponseHandler(message: ConsumeMessage | null) {
    if (!message) {
      return;
    }

    this.messageService.getClient().ack(message);

    const content = message.content.toString();

    this.logger.debug(`Message consumed. content: ${content}`);

    const { abcId, audioId, transcription } = JSON.parse(content);

    const abc = await this.abcModel.findById(abcId);

    if (!abc) {
      return;
    }

    const audio = abc.audios.find((value) => value._id.toString() === audioId);

    if (!audio) {
      return;
    }

    audio.text = transcription;
    abc.save();
  }

  async getAbcStatistic(userId: string) {
    this.logger.debug(`getAbcStatistic. userId: ${userId}`);

    const dialogues = await this.dialogueService.getAll(userId);

    const abcDialogues = dialogues.filter(
      (value) => value.dialogueType === DialogueType.ABC,
    );

    const emotions = new Map<string, number>();
    const lifeAreas = new Map<string, number>();

    abcDialogues.forEach((abc) => {
      const emotionsQuestion = abc.questions.find(
        (value) => value.dialogueQuestionId === '1',
      );

      const emotionLabels = emotionsQuestion?.selection.items
        .filter((selection) =>
          emotionsQuestion.answer.split(',').includes(selection._id),
        )
        .map((value) => value.text);

      emotionLabels?.forEach((emotion) => {
        const value = emotions.get(emotion) || 0;

        emotions.set(emotion, value + 1);
      });

      const lifeAreaQuestion = abc.questions.find(
        (value) => value.dialogueQuestionId === '7',
      );

      const lifeAreaLabels = lifeAreaQuestion?.selection.items
        .filter((selection) =>
          lifeAreaQuestion.answer.split(',').includes(selection._id),
        )
        .map((value) => value.text);

      lifeAreaLabels?.forEach((lifeArea) => {
        const value = lifeAreas.get(lifeArea) || 0;

        lifeAreas.set(lifeArea, value + 1);
      });
    });

    const sort = (a, b) => b.count - a.count;

    const statistic = new AbcStatistic();
    statistic.userId = userId;
    statistic.emotions = Array.from(emotions.entries())
      .map(
        (value) =>
          ({
            label: value[0],
            count: value[1],
          } as EmotionStatisticElement),
      )
      .sort(sort);

    statistic.lifeAreas = Array.from(lifeAreas.entries())
      .map(
        (value) =>
          ({
            label: value[0],
            count: value[1],
          } as LifeAreaStatisticElement),
      )
      .sort(sort);

    return statistic;
  }

  getAll(userId: string) {
    this.logger.debug(`getAll. userId: ${userId}`);

    return this.abcModel.find({ userId }, {}, { sort: { _id: -1 } });
  }

  getById(abcId: string) {
    this.logger.debug(`getById. abcId: ${abcId}`);

    return this.abcModel.findById(abcId);
  }

  create(user: User) {
    this.logger.debug(`create. userId ${user._id}`);

    const abc = new this.abcModel();
    abc.userId = user._id;
    return abc.save();
  }

  async delete(input: AbcDeleteInput) {
    this.logger.debug(`delete ${JSON.stringify(input)}`);

    const model = await this.abcModel.findById(input._id, {
      userId: true,
      audios: true,
    });
    model.audios?.forEach((audio) => this.deleteAudioFile(model.userId, audio));
    model.deleteOne();

    return model;
  }

  updateSituation(input: AbcUpdateSituationInput) {
    this.logger.debug(`updateSituation ${JSON.stringify(input)}`);

    const { _id, situation } = input;

    return this.abcModel.findOneAndUpdate(
      { _id },
      { situation },
      { new: true },
    );
  }

  async addMind(input: AbcMindInput) {
    this.logger.debug(`addMind ${JSON.stringify(input)}`);

    const model = await this.abcModel.findById(input.abcId, { minds: true });

    const mind = new Mind();
    mind.text = input.text.trim();
    model.minds.push(mind);

    await model.save();

    return last(model.minds);
  }

  async deleteMind(input: AbcDeleteMindInput) {
    this.logger.debug(`deleteMind ${JSON.stringify(input)}`);

    const model = await this.abcModel.findById(input.abcId, {
      minds: true,
      audios: true,
    });

    const mind = model.minds.find(
      (value) => value._id.toString() === input._id,
    );

    model.minds.splice(model.minds.indexOf(mind), 1);

    let highlight;
    // delete highlight by mindId
    for (let i = 0; i < model.audios.length; i++) {
      const audio = model.audios[i];

      highlight = audio.highlights.find(
        (value) => value.mindId.toString() === mind._id.toString(),
      );

      if (highlight) {
        audio.highlights.splice(audio.highlights.indexOf(highlight), 1);
        break;
      }
    }

    await model.save();

    return {
      mind,
      audioTextHighlight: highlight,
    } as MindWithAudioTextHighlight;
  }

  async addBehaviour(input: AbcBehaviourInput) {
    this.logger.debug(`addBehaviour ${JSON.stringify(input)}`);

    const abc = await this.abcModel.findById(input.abcId, { behaviours: true });

    const behaviour = new Behaviour();
    behaviour.text = input.text.trim();
    abc.behaviours.push(behaviour);

    await abc.save();

    return last(abc.behaviours);
  }

  async deleteBehaviour(input: AbcBehaviourInput) {
    this.logger.debug(`deleteBehaviour ${JSON.stringify(input)}`);

    const model = await this.abcModel.findById(input.abcId, {
      behaviours: true,
    });

    const behaviour = model.behaviours.find(
      (value) => value._id.toString() === input._id,
    );

    model.behaviours.splice(model.behaviours.indexOf(behaviour), 1);

    await model.save();

    return behaviour;
  }

  async addEmotion(input: AddEmotionInput) {
    this.logger.debug(`selectEmotion ${JSON.stringify(input)}`);

    const abc = await this.abcModel.findById(input.abcId, {
      emotions: true,
    });

    const abcEmotion = new AbcEmotion();
    abcEmotion.emotionId = input.emotionId;
    abcEmotion.intensity = 5;
    abc.emotions.push(abcEmotion);

    await abc.save();

    return last(abc.emotions);
  }

  async deleteEmotion(input: AddEmotionInput) {
    this.logger.debug(`unselectEmotion ${JSON.stringify(input)}`);

    const abc = await this.abcModel.findById(input.abcId, {
      emotions: true,
    });

    const abcEmotion = abc.emotions.find(
      (value) => value.emotionId === input.emotionId,
    );

    abc.emotions.splice(abc.emotions.indexOf(abcEmotion), 1);

    await abc.save();

    return abcEmotion;
  }

  async updateEmotionIntensity(input: AbcUpdateEmotionIntensityInput) {
    this.logger.debug(`updateEmotionIntensity ${JSON.stringify(input)}`);

    const abc = await this.abcModel.findById(input.abcId, {
      emotions: true,
    });

    const abcEmotion = abc.emotions.find(
      (value) => value.emotionId === input.emotionId,
    );

    if (!abcEmotion) {
      return;
    }

    abcEmotion.intensity = input.intensity;

    await abc.save();

    return abcEmotion;
  }

  async addLifeArea(input: AddLifeAreaInput) {
    this.logger.debug(`selectLifeArea ${JSON.stringify(input)}`);

    const abc = await this.abcModel.findById(input.abcId, {
      lifeAreas: true,
    });

    const lifeArea = new AbcLifeArea();
    lifeArea.lifeAreaId = input.lifeAreaId;
    abc.lifeAreas.push(lifeArea);

    await abc.save();

    return last(abc.lifeAreas);
  }

  async deleteLifeArea(input: DeleteLifeAreaInput) {
    this.logger.debug(`unselectLifeArea ${JSON.stringify(input)}`);

    const abc = await this.abcModel.findById(input.abcId, {
      lifeAreas: true,
    });

    const lifeArea = abc.lifeAreas.find(
      (value) => value.lifeAreaId === input._id,
    );

    abc.lifeAreas.splice(abc.lifeAreas.indexOf(lifeArea), 1);

    await abc.save();

    return lifeArea;
  }

  async getAudio(abcId: string, audioId: string) {
    this.logger.debug(`getAudio. abcId: ${abcId}, audioId: ${audioId}`);

    const abc = await this.abcModel.findById(abcId, {
      audios: true,
    });

    return abc.audios.find((value) => value._id.toString() === audioId);
  }

  async addAudio(abcId: string, audioFileUpload: GraphQLUpload) {
    const { createReadStream } = await audioFileUpload;

    this.logger.debug(`addAudio. abcId: ${abcId}`);

    const abc = await this.abcModel.findById(abcId, {
      userId: true,
      audios: true,
    });
    let audio = new Audio();
    abc.audios.push(audio);
    abc.save();

    audio = abc.audios[abc.audios.length - 1];

    const path = `${this.getUserAudioFolder(
      abc.userId,
    )}/${audio._id.toString()}.webm`;

    const user = await this.userService.getById(abc.userId);

    return new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(path))
        .on('finish', () => {
          this.messageService.sendVoiceRecognizer({
            abcId,
            audioId: audio._id,
            audioFilePath: path,
            languageCode:
              user.audioRecognizeLanguageCode === 'uk' ? 'uk-UA' : 'ru-RU',
          });

          resolve(audio);
        })
        .on('error', (e) => reject(e.message)),
    );
  }

  async deleteAudio(input: AbcDeleteAudioInput) {
    this.logger.debug(`deleteAudio ${JSON.stringify(input)}`);

    const abc = await this.abcModel.findById(input.abcId, {
      userId: true,
      minds: true,
      audios: true,
    });
    const audio = abc.audios.find(
      (value) => value._id.toString() === input.audioId,
    );

    await this.deleteAudioFile(abc.userId, audio);

    audio.highlights.forEach((value) => {
      const mind = abc.minds.find(
        (mind) => mind._id.toString() === value.mindId,
      );

      abc.minds.splice(abc.minds.indexOf(mind), 1);
    });

    abc.audios.splice(abc.audios.indexOf(audio), 1);

    abc.save();

    return audio;
  }

  private async deleteAudioFile(userId: string, audio: Audio) {
    const path = `${this.getUserAudioFolder(
      userId,
    )}/${audio._id.toString()}.webm`;

    await this.execCommand(`rm ${path}`);
  }

  async addAudioTextHighlight(input: AbcAddAudioTextHighlightInput) {
    this.logger.debug(`addAudioTextHighlight ${JSON.stringify(input)}`);

    const abc = await this.abcModel.findById(input.abcId, {
      audios: true,
    });
    const audio = abc.audios.find(
      (value) => value._id.toString() === input.audioId,
    );

    const mind = await this.addMind({
      abcId: input.abcId,
      text: audio.text.substring(input.startIndex, input.endIndex),
    });

    const audioTextHighlight = new AudioTextHighlight();
    audioTextHighlight.audioId = audio._id;
    audioTextHighlight.startIndex = input.startIndex;
    audioTextHighlight.endIndex = input.endIndex;
    audioTextHighlight.mindId = mind._id;

    audio.highlights.push(audioTextHighlight);

    await abc.save();

    return {
      mind,
      audioTextHighlight: audio.highlights[audio.highlights.length - 1],
    } as AudioTextHighlightWithMind;
  }

  async deleteAudioTextHighlight(input: AbcDeleteAudioTextHighlightInput) {
    this.logger.debug(`deleteAudioTextHighlight ${JSON.stringify(input)}`);

    const abc = await this.abcModel.findById(input.abcId, {
      minds: true,
      audios: true,
    });
    const audio = abc.audios.find(
      (value) => value._id.toString() === input.audioId,
    );

    const highlight = audio.highlights.find(
      (value) => value._id.toString() === input.audioTextHighlightId,
    );

    audio.highlights.splice(audio.highlights.indexOf(highlight), 1);

    const mind = abc.minds.find(
      (value) => value._id.toString() === highlight.mindId,
    );

    abc.minds.splice(abc.minds.indexOf(mind), 1);

    abc.save();

    return highlight;
  }

  private getUserAudioFolder(userId: User['id']): string {
    const path = `${this.configService.get(
      'IMAGE_FOLDER_PATH',
    )}/${userId}/audio`;

    if (!existsSync(path)) {
      mkdirSync(path, { recursive: true });
    }

    return path;
  }

  private execCommand(command: string) {
    this.logger.debug(command);

    return new Promise((resolve, reject) => {
      exec(command, (error) => {
        if (error) {
          this.logger.error(`error: ${error.message}`);
          reject(`error: ${error.message}`);
        } else {
          resolve(true);
        }
      });
    });
  }

  async updateConsequences(consequencesInput: AbcUpdateConsequencesInput) {
    this.logger.debug(
      `updateConsequences ${JSON.stringify(consequencesInput)}`,
    );

    const abc = await this.abcModel.findById(consequencesInput._id);
    abc.consequences = consequencesInput.consequences.trim();
    return abc.save();
  }
}
