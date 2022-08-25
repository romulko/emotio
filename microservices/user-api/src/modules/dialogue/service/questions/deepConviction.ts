import {
  DialogueQuestion,
  DialogueQuestionType,
} from '../../entity/dialogueQuestion';
import { DialogueType } from '../../objectType/enum';

export const DEEP_CONVICTION_DIALOGUE: DialogueQuestion[] = [
  create({
    _id: '1',
    questionType: DialogueQuestionType.INPUT,
    question: { text: 'Какое убеждение вы хотите разобрать?' },
    next: '2',
  }),
  create({
    _id: '2',
    questionType: DialogueQuestionType.INPUT,
    question: { text: 'Если бы это было правдой, что бы это означало?' },
    next: '3',
  }),
  create({
    _id: '3',
    questionType: DialogueQuestionType.INPUT,
    question: { text: 'Если бы это было правдой, что бы это означало?' },
    next: '4',
  }),
  create({
    _id: '4',
    questionType: DialogueQuestionType.INPUT,
    question: { text: 'Если бы это было правдой, что бы это означало?' },
    next: '5',
  }),
  create({
    _id: '5',
    questionType: DialogueQuestionType.INPUT,
    question: { text: 'Если бы это было правдой, что бы это означало?' },
    next: '6',
  }),
  create({
    _id: '6',
    questionType: DialogueQuestionType.FINISH,
    question: { text: 'Спасибо, {userName}.' },
    next: '',
  }),
];

function create(question: Omit<DialogueQuestion, 'dialogueType'>) {
  return { ...question, dialogueType: DialogueType.DEEP_CONVICTION };
}
