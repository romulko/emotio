import { gql } from '@apollo/client';

import { useLoggedUser } from '../../../../../data';
import { useAbcsStatisticQuery } from '../../../../../services/apollo/generated/graphql';

export const useStatistic = () => {
  const { userId } = useLoggedUser();
  const { data, loading, refetch } = useAbcsStatisticQuery({ variables: { userId } });

  return {
    abcsStatistic: data?.abcsStatistic,
    refetch,
    loading,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const query = gql`
  query abcsStatistic($userId: String!) {
    abcsStatistic(userId: $userId) {
      userId
      emotions {
        label
        count
      }
      lifeAreas {
        label
        count
      }
    }
  }
`;
