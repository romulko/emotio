import { gql } from '@apollo/client';
import { useEffect } from 'react';

import {
  DialogueQuery,
  Question as QuestionModel,
  useDialogueLazyQuery,
} from '../../../services/apollo/generated/graphql';
import { useDialogueUrlParams } from './useDialogueUrlParams';

export type Dialogue = DialogueQuery['dialogue'];
export type Question = QuestionModel;

export const useDialogue = () => {
  const { dialogueId } = useDialogueUrlParams();
  const [fetch, { data, loading }] = useDialogueLazyQuery();

  useEffect(() => {
    if (!dialogueId) {
      return;
    }

    fetch({ variables: { dialogueId } });
  }, [fetch, dialogueId]);

  return {
    dialogueId,
    dialogue: data?.dialogue,
    loaded: !dialogueId || (!loading && !!data),
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const query = gql`
  query dialogue($dialogueId: String!) {
    dialogue(dialogueId: $dialogueId) {
      _id
      dialogueType
      questions {
        _id
        questionType
        dialogueQuestionId
        text
        predefinedAnswer
        answer
        selection {
          _id
          items {
            _id
            text
          }
          multiselect
        }
      }
    }
  }
`;
