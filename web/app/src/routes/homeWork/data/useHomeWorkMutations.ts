import { gql } from '@apollo/client';
import { message } from 'antd';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { MESSAGE_DURATION } from '../../../config';
import { useLoggedUser } from '../../../data';
import {
  HomeWorkCreateInput,
  HomeWorkDeleteInput,
  HomeWorksDocument,
  HomeWorksQuery,
  HomeWorkUpdateInput,
  useHomeWorkCreateMutation,
  useHomeWorkDeleteMutation,
} from '../../../services/apollo/generated/graphql';

export const useHomeWorkMutations = () => {
  const { t } = useTranslation();
  const { userId } = useLoggedUser();

  // const { homeWorkId } = useHomeWorkUrlParams();

  const [createMutation, { loading: homeWorkCreateLoading }] = useHomeWorkCreateMutation();
  const [updateMutation, { loading: homeWorkUpdateLoading }] = useHomeWorkCreateMutation();
  const [deleteMutation, { loading: homeWorkDeleteLoading }] = useHomeWorkDeleteMutation();

  const homeWorkCreate = useCallback(
    (input: HomeWorkCreateInput) =>
      createMutation({
        variables: { input },
        update: (cache, { data }) => {
          const result = data?.homeWorkCreate;

          if (!result) {
            return;
          }

          const cacheData = cache.readQuery<HomeWorksQuery>({
            query: HomeWorksDocument,
            variables: { userId },
          });

          if (!cacheData) {
            return;
          }

          cache.writeQuery<HomeWorksQuery>({
            query: HomeWorksDocument,
            variables: { userId },
            data: {
              homeWorks: [result, ...cacheData.homeWorks],
            },
          });

          message.success(t('common.created'), MESSAGE_DURATION);
        },
      }),
    [t, createMutation, userId],
  );

  const homeWorkUpdate = useCallback(
    (input: HomeWorkUpdateInput) =>
      updateMutation({
        variables: { input },
        update: () => message.success(t('common.saved'), MESSAGE_DURATION),
      }),
    [t, updateMutation],
  );

  const homeWorkDelete = useCallback(
    (_id: HomeWorkDeleteInput['_id'], useMessage?: boolean) =>
      deleteMutation({
        variables: {
          input: {
            _id,
          },
        },
        update: cache => {
          cache.evict({
            id: `HomeWork:${_id}`,
          });

          cache.gc();
        },
      }).then(() => {
        useMessage && message.success(t('common.deleted'), MESSAGE_DURATION);

        return Promise.resolve();
      }),
    [t, deleteMutation],
  );

  return {
    homeWorkCreate,
    homeWorkCreateLoading,
    homeWorkUpdate,
    homeWorkUpdateLoading,
    homeWorkDelete,
    homeWorkDeleteLoading,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const query = gql`
  mutation homeWorkCreate($input: HomeWorkCreateInput!) {
    homeWorkCreate(input: $input) {
      _id
      whatToDo
      whatWeGet
    }
  }

  mutation homeWorkUpdate($input: HomeWorkUpdateInput!) {
    homeWorkUpdate(input: $input) {
      _id
      whatToDo
      whatWeGet
    }
  }

  mutation homeWorkDelete($input: HomeWorkDeleteInput!) {
    homeWorkDelete(input: $input) {
      _id
    }
  }
`;
