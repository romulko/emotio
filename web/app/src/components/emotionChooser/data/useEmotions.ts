import { gql } from '@apollo/client';
import { useCallback } from 'react';

import { useLoggedUser } from '../../../data';
import { Emotion, useEmotionsQuery } from '../../../services/apollo/generated/graphql';

export const useEmotions = () => {
  const { loggedUser } = useLoggedUser();
  const { data, loading } = useEmotionsQuery({ variables: { languageCode: loggedUser.languageCode } });

  const emotionIdToName = useCallback(
    (emotionId: string) => (data?.emotions ? findEmotion(data?.emotions, emotionId)?.text || '' : ''),
    [data],
  );

  return {
    emotions: data?.emotions || [],
    loading,
    emotionIdToName,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const query = gql`
  query emotions($languageCode: String!) {
    emotions(languageCode: $languageCode) {
      _id
      text
    }
  }
`;

const findEmotion = (emotions: Emotion[], emotionId: string) => emotions.find(value => value._id === emotionId);
