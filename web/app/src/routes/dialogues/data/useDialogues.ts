import { gql } from '@apollo/client';

import { useLoggedUser } from '../../../data';
import { DialoguesQuery, useDialoguesQuery } from '../../../services/apollo/generated/graphql';

export type Dialogue = DialoguesQuery['dialogues'][0];

export const useDialogues = (dialogueTypes: string[]) => {
  const { userId } = useLoggedUser();
  const { data, loading } = useDialoguesQuery({ variables: { userId } });

  return {
    dialogues: data?.dialogues.filter(value => dialogueTypes.includes(value.dialogueType)) || [],
    loading,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const query = gql`
  query dialogues($userId: String!) {
    dialogues(userId: $userId) {
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
