import { gql } from '@apollo/client';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useMeQuery } from '../services/apollo/generated/graphql';

export const useLoggedUser = () => {
  const { i18n } = useTranslation();
  const { data, loading } = useMeQuery();
  const me = data?.me;
  const userId = me?._id;

  const i18nInitializedRef = useRef(false);

  useEffect(() => {
    if (me && !i18nInitializedRef.current) {
      i18n.changeLanguage(me.languageCode);
      i18nInitializedRef.current = true;
    }
  }, [me, i18n]);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return { userId: userId!, loggedUser: me!, loading };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const query = gql`
  query me {
    me {
      _id
      email
      name
      photo
      languageCode
      audioRecognizeLanguageCode
    }
  }
`;
