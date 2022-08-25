import { LifeArea } from '../entity';

type LifeAreaInternal = {
  _id: string;
  text: {
    ru: string;
    uk: string;
  };
};

const LIFE_AREAS: LifeAreaInternal[] = [
  {
    _id: '16',
    text: { ru: 'я', uk: 'я' },
  },
  {
    _id: '1',
    text: { ru: 'семья', uk: "сім'я" },
  },
  {
    _id: '18',
    text: { ru: 'отец', uk: 'тато' },
  },
  {
    _id: '119',
    text: { ru: 'мать', uk: 'мама' },
  },
  {
    _id: '2',
    text: { ru: 'друзья', uk: 'друзі' },
  },
  {
    _id: '3',
    text: { ru: 'любовь', uk: 'любов' },
  },
  {
    _id: '15',
    text: { ru: 'девушки', uk: 'дівчата' },
  },
  {
    _id: '4',
    text: { ru: 'работа', uk: 'робота' },
  },
  {
    _id: '6',
    text: { ru: 'сон', uk: 'сон' },
  },
  {
    _id: '8',
    text: { ru: 'еда', uk: 'їжа' },
  },
  {
    _id: '9',
    text: { ru: 'отдых', uk: 'відпочинок' },
  },
  {
    _id: '11',
    text: { ru: 'путешествия', uk: 'подорожі' },
  },
  {
    _id: '12',
    text: { ru: 'хобби', uk: 'хобі' },
  },
  {
    _id: '13',
    text: { ru: 'развлечения', uk: 'розваги' },
  },
  {
    _id: '17',
    text: { ru: 'спорт', uk: 'спорт' },
  },
];

export const LIFE_AREAS_RU: LifeArea[] = LIFE_AREAS.map(
  ({ _id, text: { ru } }) => ({ _id, text: ru }),
);

export const LIFE_AREAS_UK: LifeArea[] = LIFE_AREAS.map(
  ({ _id, text: { uk } }) => ({ _id, text: uk }),
);
