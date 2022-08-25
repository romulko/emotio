import { gql } from '@apollo/client';
import { useEffect } from 'react';

import {
  DialogueQuery,
  Question as QuestionModel,
  useHomeWorkLazyQuery,
} from '../../../services/apollo/generated/graphql';
import { useHomeWorkUrlParams } from './useHomeWorkUrlParams';

export type HomeWork = DialogueQuery['dialogue'];
export type Question = QuestionModel;

export const useHomeWork = () => {
  const { homeWorkId } = useHomeWorkUrlParams();
  const [fetch, { data, loading }] = useHomeWorkLazyQuery();

  useEffect(() => {
    if (!homeWorkId) {
      return;
    }

    fetch({ variables: { homeWorkId } });
  }, [fetch, homeWorkId]);

  return {
    homeWorkId,
    homeWork: data?.homeWork,
    loaded: !homeWorkId || (!loading && !!data),
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const query = gql`
  query homeWork($homeWorkId: String!) {
    homeWork(homeWorkId: $homeWorkId) {
      _id
      whatToDo
      whatWeGet
    }
  }
`;
