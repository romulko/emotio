import { gql } from '@apollo/client';
import { message } from 'antd';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { MESSAGE_DURATION } from '../../../config';
import { useLoggedUser } from '../../../data';
import {
  CopingCardsDocument,
  CopingCardsQuery,
  CreateCopingCardInput,
  DeleteCopingCardInput,
  UpdateCopingCardInput,
  useCopingCardCreateMutation,
  useCopingCardDeleteMutation,
  useCopingCardUpdateMutation,
} from '../../../services/apollo/generated/graphql';

export const useCopingCardMutations = () => {
  const { t } = useTranslation();
  const { userId } = useLoggedUser();
  const [createMutation, { loading: copingCardCreateLoading }] = useCopingCardCreateMutation();
  const [updateMutation, { loading: copingCardUpdateLoading }] = useCopingCardUpdateMutation();
  const [deleteMutation, { loading: copingCardDeleteLoading }] = useCopingCardDeleteMutation();

  const copingCardCreate = useCallback(
    (input: CreateCopingCardInput) =>
      createMutation({
        variables: { input },
        update: (cache, { data }) => {
          const result = data?.copingCardCreate;

          if (!result) {
            return;
          }

          const cacheData = cache.readQuery<CopingCardsQuery>({
            query: CopingCardsDocument,
            variables: { userId },
          });

          if (!cacheData) {
            return;
          }

          cache.writeQuery<CopingCardsQuery>({
            query: CopingCardsDocument,
            variables: { userId },
            data: {
              copingCards: [...cacheData.copingCards, result],
            },
          });

          message.success(t('common.created'), MESSAGE_DURATION);
        },
      }),
    [t, createMutation, userId],
  );

  const copingCardUpdate = useCallback(
    (input: UpdateCopingCardInput) =>
      updateMutation({
        variables: { input },
        update: () => message.success(t('common.saved'), MESSAGE_DURATION),
      }),
    [t, updateMutation],
  );

  const copingCardDelete = useCallback(
    (_id: DeleteCopingCardInput['_id']) =>
      deleteMutation({
        variables: {
          input: {
            _id,
          },
        },
        update: cache => {
          cache.evict({
            id: `CopingCard:${_id}`,
          });

          cache.gc();
        },
      }).then(() => message.success(t('common.deleted'), MESSAGE_DURATION) && Promise.resolve()),
    [t, deleteMutation],
  );

  return {
    copingCardCreate,
    copingCardCreateLoading,
    copingCardUpdate,
    copingCardUpdateLoading,
    copingCardDelete,
    copingCardDeleteLoading,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const query = gql`
  mutation copingCardCreate($input: CreateCopingCardInput!) {
    copingCardCreate(input: $input) {
      _id
      emotionId
      mind
      technics {
        _id
        technicName
        description
        howToDescription
      }
    }
  }

  mutation copingCardUpdate($input: UpdateCopingCardInput!) {
    copingCardUpdate(input: $input) {
      _id
      emotionId
      mind
    }
  }

  mutation copingCardDelete($input: DeleteCopingCardInput!) {
    copingCardDelete(input: $input) {
      _id
    }
  }
`;
