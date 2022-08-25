import { gql } from '@apollo/client';
import { message } from 'antd';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { MESSAGE_DURATION } from '../../../config';
import {
  TechnicDoingCreateInput,
  TechnicDoingEndEmotionIntensityUpdateInput,
  TechnicDoingStartEmotionIntensityUpdateInput,
  useCopingCardTechnicDoingCreateMutation,
  useCopingCardTechnicDoingDeleteMutation,
  useCopingCardTechnicDoingEndEmotionIntensityUpdateMutation,
  useCopingCardTechnicDoingFinishMutation,
  useCopingCardTechnicDoingStartEmotionIntensityUpdateMutation,
} from '../../../services/apollo/generated/graphql';
import { useCopingCardUrlParams } from './useCopingCardUrlParams';

export const useDoingMutations = () => {
  const { t } = useTranslation();
  const { copingCardId, technicId, doingId } = useCopingCardUrlParams();

  const [createDoingMutation, { loading: createDoingLoading }] = useCopingCardTechnicDoingCreateMutation();

  const [updateDoingStartIntensityMutation, { loading: updateDoingStartIntensityLoading }] =
    useCopingCardTechnicDoingStartEmotionIntensityUpdateMutation();
  const [updateDoingEndIntensityMutation, { loading: updateDoingEndIntensityLoading }] =
    useCopingCardTechnicDoingEndEmotionIntensityUpdateMutation();

  const [completeDoingMutation, { loading: completeDoingLading }] = useCopingCardTechnicDoingFinishMutation();
  const [deleteDoingMutation, { loading: deleteDoingLading }] = useCopingCardTechnicDoingDeleteMutation();

  const createDoing = useCallback(
    (input: Pick<TechnicDoingCreateInput, 'technicId'>) =>
      createDoingMutation({
        variables: { input: { ...input, copingCardId } },
        update: (cache, { data }) => {
          const result = data?.copingCardTechnicDoingCreate;

          if (!result) {
            return;
          }

          cache.modify({
            id: `CopingCardTechnic:${input.technicId}`,
            fields: {
              doings(existing = []) {
                const newRef = cache.writeFragment({
                  data: result,
                  fragment: gql`
                    fragment NewDoing on TechnicDoing {
                      _id
                      startEmotionIntensity
                      endEmotionIntensity
                    }
                  `,
                });
                return [...existing, newRef];
              },
            },
          });
        },
      }),
    [createDoingMutation, copingCardId],
  );

  const updateDoingStartIntensity = useCallback(
    (input: Pick<TechnicDoingStartEmotionIntensityUpdateInput, 'startEmotionIntensity'>) =>
      updateDoingStartIntensityMutation({
        variables: { input: { ...input, copingCardId, technicId, doingId } },
      }),
    [copingCardId, technicId, doingId, updateDoingStartIntensityMutation],
  );

  const updateDoingEndIntensity = useCallback(
    (input: Pick<TechnicDoingEndEmotionIntensityUpdateInput, 'endEmotionIntensity'>) =>
      updateDoingEndIntensityMutation({
        variables: { input: { ...input, copingCardId, technicId, doingId } },
      }),
    [copingCardId, technicId, doingId, updateDoingEndIntensityMutation],
  );

  const completeDoing = useCallback(
    () =>
      completeDoingMutation({
        variables: { input: { copingCardId, technicId, doingId } },
        update: () => {
          message.success(t('common.saved'), MESSAGE_DURATION);
        },
      }),
    [t, copingCardId, technicId, doingId, completeDoingMutation],
  );

  const deleteDoing = useCallback(
    () =>
      deleteDoingMutation({
        variables: {
          input: {
            copingCardId,
            technicId,
            doingId,
          },
        },
        update: (cache, mutationResult) => {
          const result = mutationResult?.data?.copingCardTechnicDoingDelete;

          if (!result) {
            return;
          }

          const { _id } = result;

          cache.evict({
            id: `TechnicDoing:${_id}`,
          });

          cache.gc();
        },
      }),
    [technicId, copingCardId, doingId, deleteDoingMutation],
  );

  return {
    createDoing,
    createDoingLoading,

    updateDoingStartIntensity,
    updateDoingStartIntensityLoading,

    updateDoingEndIntensity,
    updateDoingEndIntensityLoading,

    completeDoing,
    completeDoingLading,

    deleteDoing,
    deleteDoingLading,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const query = gql`
  mutation copingCardTechnicDoingCreate($input: TechnicDoingCreateInput!) {
    copingCardTechnicDoingCreate(input: $input) {
      _id
      startEmotionIntensity
      endEmotionIntensity
    }
  }

  mutation copingCardTechnicDoingStartEmotionIntensityUpdate($input: TechnicDoingStartEmotionIntensityUpdateInput!) {
    copingCardTechnicDoingStartEmotionIntensityUpdate(input: $input) {
      _id
      startEmotionIntensity
    }
  }

  mutation copingCardTechnicDoingEndEmotionIntensityUpdate($input: TechnicDoingEndEmotionIntensityUpdateInput!) {
    copingCardTechnicDoingEndEmotionIntensityUpdate(input: $input) {
      _id
      endEmotionIntensity
    }
  }

  mutation copingCardTechnicDoingFinish($input: TechnicDoingFinishInput!) {
    copingCardTechnicDoingFinish(input: $input) {
      _id
    }
  }

  mutation copingCardTechnicDoingDelete($input: TechnicDoingDeleteInput!) {
    copingCardTechnicDoingDelete(input: $input) {
      _id
    }
  }
`;
