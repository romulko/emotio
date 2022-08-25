import { MutableRefObject, useEffect } from 'react';

import { QuestionType } from '../../../data/enums';
import { useDialogue } from '../../../data/useDialogue';

export const useMoveToLastQuestion = (ref: MutableRefObject<HTMLDivElement | null>) => {
  const { dialogue } = useDialogue();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const questions = dialogue?.questions;

      // scroll only if dialogue is completed
      if (!questions || questions[questions.length - 1].questionType === QuestionType.FINISH) {
        return;
      }

      ref.current?.lastElementChild?.scrollIntoView({ behavior: 'smooth' });
    }, 100);

    return () => clearTimeout(timeout);
  }, [dialogue, ref]);
};
