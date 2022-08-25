import { gql } from '@apollo/client';

import { useLoggedUser } from '../../../data';
import { CopingCardsQuery, useCopingCardsQuery } from '../../../services/apollo/generated/graphql';

export type CopingCard = CopingCardsQuery['copingCards'][0];

export const useCopingCards = () => {
  const { userId } = useLoggedUser();
  const { data, loading } = useCopingCardsQuery({ variables: { userId } });

  return {
    copingCards: data?.copingCards || [],
    loading,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const query = gql`
  query copingCards($userId: String!) {
    copingCards(userId: $userId) {
      _id
      emotionId
      mind
    }
  }
`;
