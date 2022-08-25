import { gql } from '@apollo/client';
import { message } from 'antd';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { MESSAGE_DURATION } from '../config';
import {
  UserUpdateAudioRecognizeLanguageCodeInput,
  UserUpdateLanguageCodeInput,
  useUserUpdateAudioRecognizeLanguageCodeMutation,
  useUserUpdateLanguageCodeMutation,
} from '../services/apollo/generated/graphql';
import { useLoggedUser } from './useLoggedUser';

export const useUserMutations = () => {
  const { userId } = useLoggedUser();
  const { t } = useTranslation();

  const [userUpdateLanguageCodeMutation] = useUserUpdateLanguageCodeMutation();
  const [userUpdateAudioRecognizeLanguageCodeMutation] = useUserUpdateAudioRecognizeLanguageCodeMutation();

  const updateLanguageCode = useCallback(
    (languageCode: UserUpdateLanguageCodeInput['languageCode']) =>
      userUpdateLanguageCodeMutation({
        variables: {
          languageCodeInput: {
            languageCode,
            userId,
          },
        },
      }).then(() => message.success(t('common.saved'), MESSAGE_DURATION) && Promise.resolve()),
    [userUpdateLanguageCodeMutation, t, userId],
  );

  const userUpdateAudioRecognizeLanguageCode = useCallback(
    (audioRecognizeLanguageCode: UserUpdateAudioRecognizeLanguageCodeInput['audioRecognizeLanguageCode']) =>
      userUpdateAudioRecognizeLanguageCodeMutation({
        variables: {
          audioRecognizeLanguageCodeInput: {
            audioRecognizeLanguageCode,
            userId,
          },
        },
      }).then(() => message.success(t('common.saved'), MESSAGE_DURATION) && Promise.resolve()),
    [userUpdateAudioRecognizeLanguageCodeMutation, t, userId],
  );

  return { updateLanguageCode, userUpdateAudioRecognizeLanguageCode };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const query = gql`
  mutation userUpdateLanguageCode($languageCodeInput: UserUpdateLanguageCodeInput!) {
    userUpdateLanguageCode(languageCodeInput: $languageCodeInput) {
      _id
      languageCode
    }
  }

  mutation userUpdateAudioRecognizeLanguageCode(
    $audioRecognizeLanguageCodeInput: UserUpdateAudioRecognizeLanguageCodeInput!
  ) {
    userUpdateAudioRecognizeLanguageCode(audioRecognizeLanguageCodeInput: $audioRecognizeLanguageCodeInput) {
      _id
      audioRecognizeLanguageCode
    }
  }
`;
