import { gql } from '@apollo/client';

import { useLoggedUser } from '../../../data';
import { HomeWorksQuery, useHomeWorksQuery } from '../../../services/apollo/generated/graphql';

export type HomeWork = HomeWorksQuery['homeWorks'][0];

export const useHomeWorks = () => {
  const { userId } = useLoggedUser();
  const { data, loading } = useHomeWorksQuery({ variables: { userId } });

  return {
    homeWorks: data?.homeWorks || [],
    loading,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const query = gql`
  query homeWorks($userId: String!) {
    homeWorks(userId: $userId) {
      _id
      whatToDo
      whatWeGet
    }
  }
`;
