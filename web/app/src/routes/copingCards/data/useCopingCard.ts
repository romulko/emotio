import { gql } from '@apollo/client';
import { useEffect } from 'react';

import { CopingCardQuery, useCopingCardLazyQuery } from '../../../services/apollo/generated/graphql';
import { useCopingCardUrlParams } from './useCopingCardUrlParams';

export type CopingCard = CopingCardQuery['copingCard'];
export type CopingCardTechnic = CopingCardQuery['copingCard']['technics'][0];

export const useCopingCard = () => {
  const { copingCardId } = useCopingCardUrlParams();
  const [fetch, { data, loading }] = useCopingCardLazyQuery();

  useEffect(() => {
    if (!copingCardId) {
      return;
    }

    fetch({ variables: { copingCardId } });
  }, [fetch, copingCardId]);

  return {
    copingCardId,
    copingCard: data?.copingCard,
    loaded: !copingCardId || (!loading && !!data),
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const query = gql`
  query copingCard($copingCardId: String!) {
    copingCard(copingCardId: $copingCardId) {
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
`;
