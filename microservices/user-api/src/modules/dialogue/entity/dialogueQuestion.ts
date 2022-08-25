import { DialogueType } from '../objectType/enum';

export interface DialogueQuestion {
  _id: string;
  dialogueType: DialogueType;
  questionType: DialogueQuestionType;
  question: QuestionInput;
  selectionConfig?: SelectionConfig;
  next: string | NextYesNo | NextSelections;
}

interface QuestionInput {
  text: string;
}

interface SelectionConfig {
  multiselect?: boolean;
}

export interface YesNoItem {
  _id: string;
  next: string;
}

export interface NextYesNo {
  yes: YesNoItem;
  no: YesNoItem;
}

export type NextSelections = NextSelection[];

export interface NextSelection {
  _id: string;
  text: string;
  next: string;
}

export enum DialogueQuestionType {
  INPUT = 'INPUT',
  YES_NO = 'YES_NO',
  SELECTIONS = 'SELECTIONS',
  EMOTIONS = 'EMOTIONS',
  LIFE_AREAS = 'LIFE_AREAS',
  FINISH = 'FINISH',
}
