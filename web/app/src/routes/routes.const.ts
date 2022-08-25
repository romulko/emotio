export const HOME = '/';
export const LOGIN = '/login';
export const REGISTRATION = '/registration';
export const PROFILE = '/profile';
export const POSTULATES = '/postulates';

export const ABCS = '/abcs';
export const ABCS_STATISTIC = `${ABCS}/statistic`;

// COPING CARDS
export const COPING_CARDS = '/coping-cards';
export const COPING_CARDS_DETAILS = `${COPING_CARDS}/:copingCardId/details`;
export const COPING_CARDS_CREAT = `${COPING_CARDS}/create`;
export const COPING_CARDS_EDIT = `${COPING_CARDS}/:copingCardId/edit`;

export const COPING_CARDS_TECHNIC_CREATE = `${COPING_CARDS_DETAILS}/technic/create`;
export const COPING_CARDS_TECHNIC_EDIT = `${COPING_CARDS_DETAILS}/technic/:technicId/edit`;

const COPING_CARDS_TECHNIC_DOING_BASE = `${COPING_CARDS_DETAILS}/technic/:technicId/doing/:doingId`;

export const COPING_CARDS_TECHNIC_BEGIN = `${COPING_CARDS_TECHNIC_DOING_BASE}/begin`;
export const COPING_CARDS_TECHNIC_DOING = `${COPING_CARDS_TECHNIC_DOING_BASE}/doing`;
export const COPING_CARDS_TECHNIC_COMPLETE = `${COPING_CARDS_TECHNIC_DOING_BASE}/complete`;

// DIALOGUE
export const DIALOGUES = '/dialogues';
export const DIALOGUE = `${DIALOGUES}/:dialogueId`;
export const DIALOGUE_CREATE = `${DIALOGUES}/create`;

// HOME WORK
export const HOME_WORKS = '/home-works';
export const HOME_WORKS_DETAILS = `${HOME_WORKS}/:homeWorkId/details`;
export const HOME_WORKS_CREAT = `${HOME_WORKS}/create`;
export const HOME_WORKS_EDIT = `${HOME_WORKS}/:homeWorkId/edit`;

export const CONTACTS = '/contacts';
