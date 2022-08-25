import {
  DialogueQuestion,
  DialogueQuestionType,
} from '../../entity/dialogueQuestion';
import { DialogueType } from '../../objectType/enum';

export const COGNITIVE_RESTRUCTURING_DIALOGUE: DialogueQuestion[] = [
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
      text: 'Что свидетельствует за (конкретные факты) что "{belief}"?\nВ "за и против"" должны быть только чистые, конкретные, реально существующие факты, без суждений, собственных вкусов, чувств, оценок, без того, что нам показалось. Только факты.',
    },
    next: '3',
  }),
  create({
    _id: '3',
    questionType: DialogueQuestionType.INPUT,
    question: { text: 'Что свидетельствует против?' },
    next: '4',
  }),

  create({
    _id: '4',
    questionType: DialogueQuestionType.YES_NO,
    question: { text: 'Возможны ли другие объяснения что "{belief}"?' },
    next: { yes: { _id: '41', next: '5' }, no: { _id: '42', next: '6' } },
  }),
  create({
    _id: '5',
    questionType: DialogueQuestionType.INPUT,
    question: { text: 'Какие?' },
    next: '6',
  }),

  create({
    _id: '6',
    questionType: DialogueQuestionType.INPUT,
    question: {
      text: 'Что в такой ситуации подумал бы кто-то другой (ваши друзья либо авторитетные личности)?',
    },
    next: '7',
  }),

  create({
    _id: '7',
    questionType: DialogueQuestionType.INPUT,
    question: {
      text: 'Какие преимущества дает мне такой способ мышления (какие выгоды я получаю)?',
    },
    next: '8',
  }),

  create({
    _id: '8',
    questionType: DialogueQuestionType.INPUT,
    question: {
      text: 'Какие недостатки дает мне такой способ мышления (что я теряю, думая так)?',
    },
    next: '9',
  }),

  create({
    _id: '9',
    questionType: DialogueQuestionType.SELECTIONS,
    question: {
      text: 'Основана ли моя мысль на моем самочувствии или на реально произошедших фактах?',
    },
    next: [
      { _id: '91', text: 'Самочувствии', next: '10' },
      {
        _id: '92',
        text: 'Реально произошедших фактах',
        next: '11',
      },
      {
        _id: '93',
        text: 'И то и другое',
        next: '12',
      },
    ],
  }),
  create({
    _id: '10',
    questionType: DialogueQuestionType.EMOTIONS,
    question: { text: 'Какие эмоции?' },
    next: '14',
  }),
  create({
    _id: '11',
    questionType: DialogueQuestionType.INPUT,
    question: { text: 'Какие факты?' },
    next: '14',
  }),
  create({
    _id: '12',
    questionType: DialogueQuestionType.EMOTIONS,
    question: { text: 'Какие эмоции?' },
    next: '13',
  }),
  create({
    _id: '13',
    questionType: DialogueQuestionType.INPUT,
    question: { text: 'Какие факты?' },
    next: '14',
  }),
  create({
    _id: '14',
    questionType: DialogueQuestionType.INPUT,
    question: { text: 'Какие логические ошибки я допускаю?' },
    next: '15',
  }),

  create({
    _id: '15',
    questionType: DialogueQuestionType.YES_NO,
    question: {
      text: 'Не забываю ли я о некоторых важных фактах?',
    },
    next: { yes: { _id: '151', next: '16' }, no: { _id: '152', next: '17' } },
  }),
  create({
    _id: '16',
    questionType: DialogueQuestionType.INPUT,
    question: { text: 'Какие важные факты?' },
    next: '17',
  }),

  create({
    _id: '17',
    questionType: DialogueQuestionType.YES_NO,
    question: { text: 'Не переоцениваю ли значимость мелочей?' },
    next: { yes: { _id: '171', next: '18' }, no: { _id: '172', next: '19' } },
  }),
  create({
    _id: '18',
    questionType: DialogueQuestionType.INPUT,
    question: { text: 'Какие мелочи?' },
    next: '19',
  }),

  create({
    _id: '19',
    questionType: DialogueQuestionType.YES_NO,
    question: {
      text: 'Не рассуждаю ли я в экстремальных категориях – всё или ничего?',
    },
    next: { yes: { _id: '191', next: '20' }, no: { _id: '192', next: '21' } },
  }),
  create({
    _id: '20',
    questionType: DialogueQuestionType.INPUT,
    question: { text: 'Какие это крайности?' },
    next: '21',
  }),

  create({
    _id: '19',
    questionType: DialogueQuestionType.YES_NO,
    question: {
      text: 'Не рассуждаю ли я в экстремальных категориях – всё или ничего?',
    },
    next: { yes: { _id: '191', next: '20' }, no: { _id: '192', next: '21' } },
  }),
  create({
    _id: '20',
    questionType: DialogueQuestionType.INPUT,
    question: { text: 'Какие это крайности?' },
    next: '21',
  }),

  create({
    _id: '21',
    questionType: DialogueQuestionType.YES_NO,
    question: {
      text: 'Не рассматриваю ли я вопросы, на которые невозможно ответить?',
    },
    next: { yes: { _id: '211', next: '22' }, no: { _id: '212', next: '23' } },
  }),
  create({
    _id: '22',
    questionType: DialogueQuestionType.INPUT,
    question: { text: 'Какие это вопросы?' },
    next: '23',
  }),

  create({
    _id: '23',
    questionType: DialogueQuestionType.YES_NO,
    question: {
      text: 'Не предъявляю ли я к себе более строгие требования, чем к другим?',
    },
    next: { yes: { _id: '231', next: '24' }, no: { _id: '232', next: '25' } },
  }),
  create({
    _id: '24',
    questionType: DialogueQuestionType.INPUT,
    question: { text: 'Какие требования?' },
    next: '25',
  }),

  create({
    _id: '25',
    questionType: DialogueQuestionType.YES_NO,
    question: {
      text: 'Не переоцениваю ли я вероятность угрозы определенного события?',
    },
    next: { yes: { _id: '251', next: '26' }, no: { _id: '252', next: '27' } },
  }),
  create({
    _id: '26',
    questionType: DialogueQuestionType.INPUT,
    question: { text: 'Какое событие?' },
    next: '27',
  }),

  create({
    _id: '27',
    questionType: DialogueQuestionType.YES_NO,
    question: {
      text: 'Есть ли что-то ужасное, что может произойти и я так этого боюсь?',
    },
    next: { yes: { _id: '281', next: '28' }, no: { _id: '282', next: '29' } },
  }),
  create({
    _id: '28',
    questionType: DialogueQuestionType.INPUT,
    question: {
      text: 'Что ужасное может произойти?',
    },
    next: '29',
  }),

  create({
    _id: '29',
    questionType: DialogueQuestionType.YES_NO,
    question: {
      text: 'Не принимаю ли я на себя ответственность за вещи, которые я не могу контролировать?',
    },
    next: { yes: { _id: '291', next: '30' }, no: { _id: '292', next: '31' } },
  }),
  create({
    _id: '30',
    questionType: DialogueQuestionType.INPUT,
    question: { text: 'Какие вещи?' },
    next: '31',
  }),

  create({
    _id: '31',
    questionType: DialogueQuestionType.INPUT,
    question: {
      text: 'Вывод. Запишите альтернативную мысль которая более адекватно отображает существующую реальность.',
    },
    next: '32',
  }),

  create({
    _id: '32',
    questionType: DialogueQuestionType.YES_NO,
    question: {
      text: 'Давайте проверим?',
    },
    next: { yes: { _id: '321', next: '33' }, no: { _id: '322', next: '34' } },
  }),

  create({
    _id: '33',
    questionType: DialogueQuestionType.INPUT,
    question: {
      text: 'Создать домашнее задание и проверить исход.',
    },
    next: '34',
  }),

  create({
    _id: '34',
    questionType: DialogueQuestionType.LIFE_AREAS,
    question: { text: 'Из какой области жизни эта ситуация?' },
    next: '35',
  }),

  create({
    _id: '35',
    questionType: DialogueQuestionType.FINISH,
    question: {
      text: 'Спасибо, {userName}.',
    },
    next: '',
  }),
];

function create(question: Omit<DialogueQuestion, 'dialogueType'>) {
  return { ...question, dialogueType: DialogueType.COGNITIVE_RESTRUCTURING };
}
