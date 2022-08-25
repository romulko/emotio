import {
  DialogueQuestion,
  DialogueQuestionType,
} from '../../entity/dialogueQuestion';
import { DialogueType } from '../../objectType/enum';

export const WANT_DIALOGUE: DialogueQuestion[] = [
  create({
    _id: '1',
    questionType: DialogueQuestionType.INPUT,
    question: {
      text: '{userName}, что вы хотите сегодня? Начните фразу с "Я хочу...".',
    },
    next: '2',
  }),
  create({
    _id: '2',
    questionType: DialogueQuestionType.INPUT,
    question: {
      text: 'А еще что хотите? Можно хотеть все.',
    },
    next: '3',
  }),
  create({
    _id: '3',
    questionType: DialogueQuestionType.INPUT,
    question: {
      text: 'Идем еще глубже, раздвигая границы. {userName}, чего хотите еще?',
    },
    next: '4',
  }),
  create({
    _id: '4',
    questionType: DialogueQuestionType.INPUT,
    question: {
      text: 'Еще немножко глубже. Что еще?',
    },
    next: '5',
  }),
  create({
    _id: '5',
    questionType: DialogueQuestionType.FINISH,
    question: {
      text: 'Спасибо, {userName}.',
    },
    next: '-1',
  }),
];

function create(question: Omit<DialogueQuestion, 'dialogueType'>) {
  return { ...question, dialogueType: DialogueType.WANT };
}
