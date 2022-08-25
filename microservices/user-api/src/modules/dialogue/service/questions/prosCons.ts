import {
  DialogueQuestion,
  DialogueQuestionType,
} from '../../entity/dialogueQuestion';
import { DialogueType } from '../../objectType/enum';

export const PROS_CONS_DIALOGUE: DialogueQuestion[] = [
  create({
    _id: '1',
    questionType: DialogueQuestionType.INPUT,
    question: { text: 'Какое убеждение вы хотите разобрать?' },
    next: '2',
  }),
  create({
    _id: '2',
    questionType: DialogueQuestionType.INPUT,
    question: {
      text: 'Чем мне помогает эта мысль?',
    },
    next: '3',
  }),
  create({
    _id: '3',
    questionType: DialogueQuestionType.INPUT,
    question: {
      text: 'Чем мне мешает эта мысль?',
    },
    next: '4',
  }),
  create({
    _id: '4',
    questionType: DialogueQuestionType.FINISH,
    question: {
      text: 'Спасибо, {userName}.',
    },
    next: '-1',
  }),
];

function create(question: Omit<DialogueQuestion, 'dialogueType'>) {
  return { ...question, dialogueType: DialogueType.PROS_CONS };
}
