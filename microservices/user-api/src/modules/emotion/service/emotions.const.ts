import { Emotion } from '../entity';

type EmotionInternal = {
  _id: string;
  text: {
    ru: string;
    uk: string;
  };
};

const EMOTIONS: EmotionInternal[] = [
  {
    _id: '6',
    text: { ru: 'тревога', uk: 'тривога' },
  },
  {
    _id: '2',
    text: { ru: 'страх', uk: 'страх' },
  },
  { _id: '21', text: { ru: 'опасение', uk: 'побоювання' } },
  { _id: '22', text: { ru: 'отвращение', uk: 'відраза' } },
  { _id: '23', text: { ru: 'паника', uk: 'паніка' } },
  { _id: '24', text: { ru: 'испуг', uk: 'переляк' } },
  { _id: '25', text: { ru: 'ужас', uk: 'жах' } },
  { _id: '26', text: { ru: 'робость', uk: 'боязкість' } },
  { _id: '27', text: { ru: 'раздражение', uk: 'роздратування' } },
  { _id: '28', text: { ru: 'беспокойство', uk: 'занепокоєння' } },
  { _id: '29', text: { ru: 'стеснительность', uk: "сором'язливість" } },
  { _id: '210', text: { ru: 'настороженность', uk: 'настороженість' } },
  { _id: '211', text: { ru: 'жалость', uk: 'жалість' } },
  {
    _id: '1',
    text: { ru: 'злость', uk: 'злість' },
  },
  { _id: '11', text: { ru: 'бешенство', uk: 'бешенство' } },
  { _id: '12', text: { ru: 'сарказм', uk: 'сарказм' } },
  { _id: '13', text: { ru: 'злоба', uk: 'злоба' } },
  { _id: '14', text: { ru: 'обида', uk: 'образа' } },
  { _id: '15', text: { ru: 'ненависть', uk: 'ненависть' } },
  { _id: '16', text: { ru: 'враждебность', uk: 'ворожість' } },
  { _id: '17', text: { ru: 'протест', uk: 'протест' } },
  { _id: '18', text: { ru: 'неистовость', uk: 'шаленість' } },
  { _id: '19', text: { ru: 'неприязнь', uk: 'неприязнь' } },
  { _id: '110', text: { ru: 'пренебрежение', uk: 'зневага' } },
  { _id: '111', text: { ru: 'равнодушие', uk: 'байдужість' } },
  {
    _id: '4',
    text: { ru: 'стыд', uk: 'сором' },
  },
  { _id: '41', text: { ru: 'униженность', uk: 'приниженість' } },
  { _id: '42', text: { ru: 'вина', uk: 'вина' } },
  { _id: '43', text: { ru: 'угрызения совести', uk: 'докори сумління' } },
  { _id: '44', text: { ru: 'смущение', uk: 'збентеження' } },
  {
    _id: '5',
    text: { ru: 'грусть', uk: 'смуток' },
  },
  { _id: '51', text: { ru: 'апатия', uk: 'апатія' } },
  { _id: '52', text: { ru: 'печаль', uk: 'сум' } },
  { _id: '53', text: { ru: 'тоска', uk: 'туга' } },
  { _id: '54', text: { ru: 'скорбь', uk: 'скорбота' } },
  { _id: '55', text: { ru: 'горе', uk: 'горе' } },
  { _id: '56', text: { ru: 'уныние', uk: 'зневіра' } },
  { _id: '57', text: { ru: 'хандра', uk: 'хандра' } },
  { _id: '58', text: { ru: 'огорчение', uk: 'засмучення' } },
  { _id: '59', text: { ru: 'отчуждение', uk: 'відчуження' } },
  { _id: '510', text: { ru: 'одиночество', uk: 'самотність' } },
  { _id: '511', text: { ru: 'удрученность', uk: 'пригніченість' } },
  { _id: '512', text: { ru: 'разочарование', uk: 'розчарування' } },
  { _id: '513', text: { ru: 'ожесточенность', uk: 'запеклість' } },
  { _id: '514', text: { ru: 'подавленность', uk: 'пригніченість' } },
  { _id: '515', text: { ru: 'жалость к себе', uk: 'жалість до себе' } },
  {
    _id: '3',
    text: { ru: 'радость', uk: 'радість' },
  },
  { _id: '31', text: { ru: 'обожание', uk: 'обожнювання' } },
  { _id: '32', text: { ru: 'эйфория', uk: 'ейфорія' } },
  { _id: '33', text: { ru: 'возбуждение', uk: 'збудження' } },
  { _id: '34', text: { ru: 'облегчение', uk: 'полегшення' } },
  { _id: '35', text: { ru: 'энтузиазм', uk: 'ентузіазм' } },
  { _id: '36', text: { ru: 'восторг', uk: 'захват' } },
  { _id: '37', text: { ru: 'легкость', uk: 'легкість' } },
  { _id: '38', text: { ru: 'симпатия', uk: 'симпатія' } },
  { _id: '39', text: { ru: 'надежда', uk: 'надія' } },
  { _id: '310', text: { ru: 'уверенность', uk: 'впевненість' } },
  { _id: '311', text: { ru: 'душевный покой', uk: 'душевний спокій' } },
  { _id: '312', text: { ru: 'заинтересованность', uk: 'зацікавленість' } },
  { _id: '313', text: { ru: 'доброжелательность', uk: 'доброзичливість' } },
];

export const EMOTIONS_RU: Emotion[] = EMOTIONS.map(({ _id, text: { ru } }) => ({
  _id,
  text: ru,
}));

export const EMOTIONS_UK: Emotion[] = EMOTIONS.map(({ _id, text: { uk } }) => ({
  _id,
  text: uk,
}));
