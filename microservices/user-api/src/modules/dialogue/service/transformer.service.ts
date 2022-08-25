import { Injectable } from '@nestjs/common';
import {
  DialogueQuestion,
  DialogueQuestionType,
  NextSelections,
  NextYesNo,
} from '../entity/dialogueQuestion';
import { Question } from '../objectType/objectTypes';
import { QuestionType } from '../objectType/enum';
import { EmotionService } from '../../emotion/service';
import { LifeAreaService } from '../../lifeArea/service';

@Injectable()
export class TransformerService {
  constructor(
    private readonly emotionService: EmotionService,
    private readonly lifeAreaService: LifeAreaService,
  ) {}

  public getTransformer(dialogueQuestionType: DialogueQuestionType) {
    return this.transformers[dialogueQuestionType];
  }

  private transformYesNo = (
    dialogueQuestion: DialogueQuestion,
    question: Question,
  ) => {
    question.questionType = QuestionType.SELECTIONS;

    const { yes, no } = dialogueQuestion.next as NextYesNo;

    question.selection = {
      _id: dialogueQuestion._id,
      items: [
        { _id: yes._id, text: 'Да' },
        { _id: no._id, text: 'Нет' },
      ],
    };
  };

  private transformSelections = (
    dialogueQuestion: DialogueQuestion,
    question: Question,
  ) => {
    question.questionType = QuestionType.SELECTIONS;

    question.selection = {
      _id: question._id,
      multiselect: dialogueQuestion.selectionConfig?.multiselect,
      items: (dialogueQuestion.next as NextSelections).map((value) => ({
        _id: value._id,
        text: value.text,
      })),
    };
  };

  private transformInput = (
    dialogueQuestion: DialogueQuestion,
    question: Question,
  ) => {
    question.questionType = QuestionType.INPUT;
  };

  private transformEmotions = (
    dialogueQuestion: DialogueQuestion,
    question: Question,
  ) => {
    question.questionType = QuestionType.SELECTIONS;

    const emotions = this.emotionService.getAll('ru', true);

    question.selection = {
      multiselect: true,
      _id: question._id,
      items: emotions.map((value) => ({
        _id: `${question._id}_${value._id}`,
        text: value.text,
      })),
    };
  };

  private transformLifeAreas = (
    dialogueQuestion: DialogueQuestion,
    question: Question,
  ) => {
    question.questionType = QuestionType.SELECTIONS;

    const lifeAreas = this.lifeAreaService.getAll('ru');

    question.selection = {
      multiselect: true,
      _id: question._id,
      items: lifeAreas.map((value) => ({
        _id: `${question._id}${value._id}`,
        text: value.text,
      })),
    };
  };

  private transformFinish = (
    dialogueQuestion: DialogueQuestion,
    question: Question,
  ) => {
    question.questionType = QuestionType.FINISH;
  };

  private readonly transformers: {
    [key in keyof typeof DialogueQuestionType]: Transformer;
  } = {
    [DialogueQuestionType.INPUT]: this.transformInput,
    [DialogueQuestionType.EMOTIONS]: this.transformEmotions,
    [DialogueQuestionType.LIFE_AREAS]: this.transformLifeAreas,
    [DialogueQuestionType.SELECTIONS]: this.transformSelections,
    [DialogueQuestionType.YES_NO]: this.transformYesNo,
    [DialogueQuestionType.FINISH]: this.transformFinish,
  };
}

type Transformer = (
  dialogueQuestion: DialogueQuestion,
  question: Question,
) => void;
