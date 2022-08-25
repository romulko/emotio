import { gql } from '@apollo/client';
import { message } from 'antd';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { MESSAGE_DURATION } from '../../../config';
import {
  CopingCardTechnicCreateInput,
  CopingCardTechnicUpdateInput,
  useCopingCardTechnicCreateMutation,
  useCopingCardTechnicDeleteMutation,
  useCopingCardTechnicUpdateMutation,
} from '../../../services/apollo/generated/graphql';
import { useCopingCardUrlParams } from './useCopingCardUrlParams';

export const useTechnicMutations = () => {
  const { t } = useTranslation();
  const { copingCardId, technicId } = useCopingCardUrlParams();

  const [createTechnicMutation, { loading: createTechnicLoading }] = useCopingCardTechnicCreateMutation();
  const [updateTechnicMutation, { loading: updateTechnicLoading }] = useCopingCardTechnicUpdateMutation();
  const [deleteTechnicMutation, { loading: deleteTechnicLading }] = useCopingCardTechnicDeleteMutation();

  const createTechnic = useCallback(
    (input: Omit<CopingCardTechnicCreateInput, 'copingCardId'>) =>
      createTechnicMutation({
        variables: { input: { ...input, copingCardId } },
        update: (cache, { data }) => {
          const result = data?.copingCardTechnicCreate;

          if (!result) {
            return;
          }

          cache.modify({
            id: `CopingCard:${copingCardId}`,
            fields: {
              technics(existing = []) {
                const newRef = cache.writeFragment({
                  data: result,
                  fragment: gql`
                    fragment NewTechnic on CopingCardTechnic {
                      _id
                      technicName
                      description
                    }
                  `,
                });
                return [...existing, newRef];
              },
            },
          });

          message.success(t('common.created'), MESSAGE_DURATION);
        },
      }),
    [t, createTechnicMutation, copingCardId],
  );

  const updateTechnic = useCallback(
    (input: Omit<CopingCardTechnicUpdateInput, 'copingCardId'>) =>
      updateTechnicMutation({
        variables: { input: { ...input, _id: technicId, copingCardId } },
        update: () => {
          message.success(t('common.saved'), MESSAGE_DURATION);
        },
      }),
    [t, technicId, updateTechnicMutation, copingCardId],
  );

  const deleteTechnic = useCallback(
    () =>
      deleteTechnicMutation({
        variables: {
          input: {
            copingCardId,
            _id: technicId,
          },
        },
        update: (cache, mutationResult) => {
          const result = mutationResult?.data?.copingCardTechnicDelete;

          if (!result) {
            return;
          }

          const { _id } = result;

          cache.evict({
            id: `CopingCardTechnic:${_id}`,
          });

          cache.gc();

          message.success(t('common.deleted'), MESSAGE_DURATION);
        },
      }),
    [t, technicId, copingCardId, deleteTechnicMutation],
  );

  return {
    createTechnic,
    createTechnicLoading,
    updateTechnic,
    updateTechnicLoading,
    deleteTechnic,
    deleteTechnicLading,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const query = gql`
  mutation copingCardTechnicCreate($input: CopingCardTechnicCreateInput!) {
    copingCardTechnicCreate(input: $input) {
      _id
      technicName
      description
      howToDescription
    }
  }

  mutation copingCardTechnicUpdate($input: CopingCardTechnicUpdateInput!) {
    copingCardTechnicUpdate(input: $input) {
      _id
      technicName
      description
      howToDescription
    }
  }

  mutation copingCardTechnicDelete($input: CopingCardTechnicDeleteInput!) {
    copingCardTechnicDelete(input: $input) {
      _id
    }
  }
`;
