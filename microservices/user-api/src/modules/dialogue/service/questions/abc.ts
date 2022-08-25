import {
  DialogueQuestion,
  DialogueQuestionType,
} from '../../entity/dialogueQuestion';
import { DialogueType } from '../../objectType/enum';

export const ABC_DIALOGUE: DialogueQuestion[] = [
  create({
    _id: '1',
    questionType: DialogueQuestionType.EMOTIONS,
    question: { text: 'Что вы почувствовали?' },
    next: '2',
  }),
  create({
    _id: '2',
    questionType: DialogueQuestionType.INPUT,
    question: {
      text: `Что происходит или произошло?
Опишите ситуацию. Пишите без раздумий, как идет. Чем меньше ума будет в тексте - тем лучше.
Будьте максимально откровенными. Здесь нет глаз которые стыдят или критикуют. Только вы и ваш поток мыслей. Пишите всё, что думаете и чувствуете.`,
    },
    next: '3',
  }),
  create({
    _id: '3',
    questionType: DialogueQuestionType.INPUT,
    question: {
      text: 'Какие мысли, образы, фантазии можно выделить?',
    },
    next: '4',
  }),
  create({
    _id: '4',
    questionType: DialogueQuestionType.INPUT,
    question: {
      text: 'Как вы себя повели, ведёте или хотите повести в этой ситуации?',
    },
    next: '5',
  }),
  create({
    _id: '5',
    questionType: DialogueQuestionType.INPUT,
    question: { text: 'Какие последствия?' },
    next: '6',
  }),
  create({
    _id: '6',
    questionType: DialogueQuestionType.INPUT,
    question: {
      text: 'Выведите паттерн АБС "Я чувствую А, потому что думаю Б, эмоции спровоцировали меня действовать С".',
    },
    next: '7',
  }),
  create({
    _id: '7',
    questionType: DialogueQuestionType.LIFE_AREAS,
    question: { text: 'Из какой области жизни эта ситуация?' },
    next: '8',
  }),
  create({
    _id: '8',
    questionType: DialogueQuestionType.FINISH,
    question: {
      text: `Спасибо, {userName}.
Следующий шаг - сделать когнитивную реструктуризацию вашей мысли, которая провоцирует соответствующие эмоции и поведение. Именно это процесс делает ваше мышление рациональным, адаптивным, функциональным, гибким и объективным.`,
    },
    next: '-1',
  }),
];

function create(question: Omit<DialogueQuestion, 'dialogueType'>) {
  return { ...question, dialogueType: DialogueType.ABC };
}
