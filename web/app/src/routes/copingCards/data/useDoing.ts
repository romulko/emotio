import { gql } from '@apollo/client';

import { useCopingCardTechnicDoingQuery } from '../../../services/apollo/generated/graphql';
import { useCopingCardUrlParams } from './useCopingCardUrlParams';

export const useDoing = () => {
  const { copingCardId, technicId, doingId } = useCopingCardUrlParams();

  const { data, loading } = useCopingCardTechnicDoingQuery({
    variables: { input: { copingCardId, doingId, technicId } },
  });

  return {
    doing: data?.copingCardTechnicDoing,
    loading,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const query = gql`
  query copingCardTechnicDoing($input: TechnicDoingFindOneInput!) {
    copingCardTechnicDoing(input: $input) {
      _id
      endDate
      startEmotionIntensity
      endEmotionIntensity
    }
  }
`;
