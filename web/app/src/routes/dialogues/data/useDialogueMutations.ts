import { gql } from '@apollo/client';
import { message } from 'antd';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { MESSAGE_DURATION } from '../../../config';
import { useLoggedUser } from '../../../data';
import {
  DialogueAnswerInput,
  DialogueCreateInput,
  DialogueDeleteInput,
  DialoguesDocument,
  DialoguesQuery,
  DialogueUpdateAnswerInput,
  useDialogueAnswerMutation,
  useDialogueCreateMutation,
  useDialogueDeleteMutation,
  useDialogueUpdateAnswerMutation,
} from '../../../services/apollo/generated/graphql';
import { useDialogueUrlParams } from './useDialogueUrlParams';

export const useDialogueMutations = () => {
  const { t } = useTranslation();
  const { userId } = useLoggedUser();

  const { dialogueId } = useDialogueUrlParams();

  const [createMutation, { loading: dialogueCreateLoading }] = useDialogueCreateMutation();
  const [dialogueAnswerMutation, { loading: dialogueAnswerLoading }] = useDialogueAnswerMutation();
  const [dialogueUpdateAnswerMutation, { loading: dialogueUpdateAnswerLoading }] = useDialogueUpdateAnswerMutation();
  const [dialogueDeleteMutation, { loading: dialogueDeleteLoading }] = useDialogueDeleteMutation();

  const dialogueCreate = useCallback(
    (input: DialogueCreateInput) =>
      createMutation({
        variables: { input },
        update: (cache, { data }) => {
          const result = data?.dialogueCreate;

          if (!result) {
            return;
          }

          const cacheData = cache.readQuery<DialoguesQuery>({
            query: DialoguesDocument,
            variables: { userId },
          });

          if (!cacheData) {
            return;
          }

          cache.writeQuery<DialoguesQuery>({
            query: DialoguesDocument,
            variables: { userId },
            data: {
              dialogues: [result, ...cacheData.dialogues],
            },
          });

          message.success(t('common.created'), MESSAGE_DURATION);
        },
      }),
    [t, createMutation, userId],
  );

  const dialogueAnswer = useCallback(
    (input: Omit<DialogueAnswerInput, 'dialogueId'>) =>
      dialogueAnswerMutation({
        variables: { input: { dialogueId, ...input } },
        update: (cache, result) => {
          const data = result.data;

          if (!data) {
            return;
          }

          cache.modify({
            id: `Question:${input.questionId}`,
            fields: {
              answer: () => input.answer,
            },
          });

          const nextQuestion = data.dialogueAnswer;

          cache.modify({
            id: `Dialogue:${dialogueId}`,
            fields: {
              questions: existing => {
                const newItem = cache.writeFragment({
                  data: nextQuestion,
                  fragment: gql`
                    fragment addQuestion on Question {
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
                  `,
                });

                return [...existing, newItem];
              },
            },
          });
        },
      }),
    [dialogueId, dialogueAnswerMutation],
  );

  const dialogueUpdateAnswer = useCallback(
    (input: Omit<DialogueUpdateAnswerInput, 'dialogueId'>) =>
      dialogueUpdateAnswerMutation({
        variables: { input: { dialogueId, ...input } },
      }),
    [dialogueId, dialogueUpdateAnswerMutation],
  );

  const dialogueDelete = useCallback(
    (dialogueId: DialogueDeleteInput['dialogueId'], useMessage?: boolean) =>
      dialogueDeleteMutation({
        variables: {
          input: {
            dialogueId,
          },
        },
        update: cache => {
          cache.evict({
            id: `Dialogue:${dialogueId}`,
          });

          cache.gc();
        },
      }).then(() => {
        useMessage && message.success(t('common.deleted'), MESSAGE_DURATION);

        return Promise.resolve();
      }),
    [t, dialogueDeleteMutation],
  );

  return {
    dialogueCreate,
    dialogueCreateLoading,
    dialogueAnswer,
    dialogueAnswerLoading,
    dialogueUpdateAnswer,
    dialogueUpdateAnswerLoading,
    dialogueDelete,
    dialogueDeleteLoading,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const query = gql`
  mutation dialogueCreate($input: DialogueCreateInput!) {
    dialogueCreate(input: $input) {
      _id
      userId
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

  mutation dialogueAnswer($input: DialogueAnswerInput!) {
    dialogueAnswer(input: $input) {
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

  mutation dialogueUpdateAnswer($input: DialogueUpdateAnswerInput!) {
    dialogueUpdateAnswer(input: $input) {
      _id
      answer
    }
  }

  mutation dialogueDelete($input: DialogueDeleteInput!) {
    dialogueDelete(input: $input) {
      _id
    }
  }
`;
