import { MutableRefObject } from 'react';

import { Question as QuestionModel } from '../../../../../../../data/useDialogue';

export interface AnswerComponentProps {
  question: QuestionModel;
  answerValueRef: MutableRefObject<string | null>;
}
