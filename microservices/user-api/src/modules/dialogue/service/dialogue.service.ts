import { Injectable, Logger } from '@nestjs/common';
import {
  DialogueQuestion,
  DialogueQuestionType,
  NextSelections,
  NextYesNo,
} from '../entity/dialogueQuestion';
import { Dialogue, Question } from '../objectType/objectTypes';
import {
  DialogueAnswerInput,
  DialogueCreateInput,
  DialogueDeleteInput,
  DialogueUpdateAnswerInput,
} from '../objectType/dialogue.input';
import { DialogueType } from '../objectType/enum';
import { first, last } from '../../../utils/array.utils';
import { TransformerService } from './transformer.service';
import { DialogueDocument, QuestionEntity } from '../entity/dialogue.document';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ABC_DIALOGUE } from './questions/abc';
import { DEEP_CONVICTION_DIALOGUE } from './questions/deepConviction';
import { PROS_CONS_DIALOGUE } from './questions/prosCons';
import { WANT_DIALOGUE } from './questions/want';
import { COGNITIVE_RESTRUCTURING_DIALOGUE } from './questions/cognitiveRestructuring';
import { firstLatterToLowerCase } from '../../../utils/string.utils';

@Injectable()
export class DialogueService {
  private readonly logger = new Logger(DialogueService.name);

  constructor(
    @InjectModel(DialogueDocument.name)
    private readonly dialogueModel: Model<DialogueDocument>,
    private readonly transformerService: TransformerService,
  ) {}

  async getAll(userId: string) {
    this.logger.debug(`getAll ${userId}`);

    const dialogues = await this.dialogueModel.find(
      { userId },
      {},
      { sort: { _id: -1 } },
    );

    return dialogues.map(this.mapDialogueDocumentToDataType);
  }

  async getById(_id: string) {
    this.logger.debug(`getById ${_id}`);

    const dialogueDocument = await this.dialogueModel.findOne({ _id });

    return this.mapDialogueDocumentToDataType(dialogueDocument);
  }

  private mapDialogueDocumentToDataType = (
    dialogueDocument: DialogueDocument,
  ) => {
    if (!dialogueDocument) {
      return null;
    }

    const { dialogueType, userId } = dialogueDocument;

    const dialogueDataType = new Dialogue();
    dialogueDataType._id = dialogueDocument._id.toString();
    dialogueDataType.userId = userId;
    dialogueDataType.dialogueType = dialogueType;

    dialogueDataType.questions = this.getQuestionsDataType(dialogueDocument);

    return dialogueDataType;
  };

  async create(input: DialogueCreateInput, userId: string) {
    this.logger.debug(`start ${JSON.stringify(input)}, userId: ${userId}`);

    const { dialogueType } = input;

    // create entity

    const dialogueQuestions = dialogueTypeToDialogueQuestionsMap[dialogueType];
    const firstDialogueQuestion = first(dialogueQuestions);

    const questionEntity = new QuestionEntity();
    questionEntity.dialogueQuestionId = firstDialogueQuestion._id;

    const dialogueDocument = new this.dialogueModel();
    dialogueDocument.userId = userId;
    dialogueDocument.dialogueType = dialogueType;
    dialogueDocument.questions.push(questionEntity);

    await dialogueDocument.save();

    // create dataType

    const dialogueDataType = new Dialogue();
    dialogueDataType._id = dialogueDocument._id.toString();
    dialogueDataType.userId = userId;
    dialogueDataType.dialogueType = dialogueType;

    dialogueDataType.questions = this.getQuestionsDataType(dialogueDocument);

    return dialogueDataType;
  }

  async answer(input: DialogueAnswerInput) {
    this.logger.debug(`answer ${JSON.stringify(input)}`);

    const { dialogueId, answer } = input;

    const dialogueDocument = await this.dialogueModel.findById(dialogueId);
    const questionEntities = dialogueDocument.questions;

    // save answer
    const lastAnsweredQuestion = last(questionEntities);
    lastAnsweredQuestion.answer = answer;

    // get next dialogue question

    const dialogueQuestions =
      dialogueTypeToDialogueQuestionsMap[dialogueDocument.dialogueType];

    const currentDialogueQuestion = dialogueQuestions.find(
      (dialogueQuestion) =>
        dialogueQuestion._id === lastAnsweredQuestion.dialogueQuestionId,
    );

    const nextDialogueQuestion = dialogueQuestions.find((value) => {
      if (
        currentDialogueQuestion.questionType === DialogueQuestionType.YES_NO
      ) {
        const nextObj = currentDialogueQuestion.next as NextYesNo;
        const next =
          nextObj.yes._id === answer ? nextObj.yes.next : nextObj.no.next;

        return value._id === next;
      } else if (
        currentDialogueQuestion.questionType === DialogueQuestionType.SELECTIONS
      ) {
        const multiselect =
          currentDialogueQuestion.selectionConfig?.multiselect;

        if (multiselect) {
          console.log('not implemented');
        } else {
          const selections = currentDialogueQuestion.next as NextSelections;

          const nextQuestionId = selections.find(
            (value) => value._id === answer,
          );

          return value._id === nextQuestionId.next;
        }
      } else {
        return value._id === currentDialogueQuestion.next;
      }
    });

    // create questionEntity

    const questionEntity = new QuestionEntity();
    questionEntity.dialogueQuestionId = nextDialogueQuestion._id;

    dialogueDocument.questions.push(questionEntity);

    await dialogueDocument.save();

    const questionsDataType = this.getQuestionsDataType(dialogueDocument);
    const lastQuestionDataType = last(questionsDataType);

    if (
      dialogueDocument.dialogueType === DialogueType.ABC &&
      nextDialogueQuestion._id === '6'
    ) {
      const question = questionsDataType.find(
        (question) => question.dialogueQuestionId === '1',
      );

      const emotions = question?.selection.items
        .filter((selection) =>
          question.answer.split(', ').includes(selection._id),
        )
        .map((value) => value.text);

      const minds = firstLatterToLowerCase(
        questionEntities.find((value) => value.dialogueQuestionId === '3')
          ?.answer,
      );

      const behaviour = firstLatterToLowerCase(
        questionEntities.find((value) => value.dialogueQuestionId === '4')
          ?.answer,
      );

      lastQuestionDataType.predefinedAnswer = `Я чувствую ${emotions}, потому что думаю "${minds}", эмоции спровоцировали меня действовать "${behaviour}".`;
    }

    return lastQuestionDataType;
  }

  async updateAnswer(input: DialogueUpdateAnswerInput) {
    this.logger.debug(`updateAnswer ${JSON.stringify(input)}`);

    const { questionId, dialogueId, answer } = input;

    const dialogueDocument = await this.dialogueModel.findById(dialogueId);

    const question = dialogueDocument.questions.find(
      (value) => value._id.toString() === questionId,
    );

    question.answer = answer;

    await dialogueDocument.save();

    return question;
  }

  async delete(input: DialogueDeleteInput) {
    this.logger.debug(`delete ${JSON.stringify(input)}`);

    const { dialogueId } = input;

    const dialogue = await this.dialogueModel.findById(dialogueId);
    await dialogue.deleteOne();

    return dialogue;
  }

  private getQuestionsDataType(dialogueDocument: DialogueDocument) {
    const { dialogueType } = dialogueDocument;
    const dialogueQuestions = dialogueTypeToDialogueQuestionsMap[dialogueType];

    return dialogueDocument.questions.map((questionDocument) => {
      const dialogueQuestion = dialogueQuestions.find(
        (value) => value._id === questionDocument.dialogueQuestionId,
      );

      const question: Question = {
        _id: questionDocument._id.toString(),
        text: dialogueQuestion.question.text,
        dialogueQuestionId: dialogueQuestion._id,
        predefinedAnswer: null,
        answer: questionDocument.answer || null,
        questionType: null,
      };

      this.transformerService.getTransformer(dialogueQuestion.questionType)(
        dialogueQuestion,
        question,
      );

      return question;
    });
  }
}

export const dialogueTypeToDialogueQuestionsMap: {
  [key in DialogueType]: DialogueQuestion[];
} = {
  ABC: ABC_DIALOGUE,
  COGNITIVE_RESTRUCTURING: COGNITIVE_RESTRUCTURING_DIALOGUE,
  DEEP_CONVICTION: DEEP_CONVICTION_DIALOGUE,
  PROS_CONS: PROS_CONS_DIALOGUE,
  WANT: WANT_DIALOGUE,
};
