import { gql } from '@apollo/client';
import { useEffect } from 'react';

import { CopingCardsQuery, useCopingCardTechnicLazyQuery } from '../../../services/apollo/generated/graphql';
import { useCopingCardUrlParams } from './useCopingCardUrlParams';

export type CopingCard = CopingCardsQuery['copingCards'][0];

export const useTechnic = () => {
  const { copingCardId, technicId } = useCopingCardUrlParams();
  const [fetch, { data, loading }] = useCopingCardTechnicLazyQuery();

  useEffect(() => {
    if (copingCardId && technicId) {
      fetch({ variables: { copingCardId, copingCardTechnicId: technicId } });
    }
  }, [fetch, copingCardId, technicId]);

  return {
    copingCardTechnic: data?.copingCardTechnic,
    loaded: !technicId || (copingCardId && technicId && !loading && !!data),
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const query = gql`
  query copingCardTechnic($copingCardId: String!, $copingCardTechnicId: String!) {
    copingCardTechnic(copingCardId: $copingCardId, copingCardTechnicId: $copingCardTechnicId) {
      _id
      technicName
      description
      howToDescription
    }
  }
`;
