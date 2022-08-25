import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { defaultLanguage } from '../../../utils/app.utils';

export const useChooseLanguage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(defaultLanguage());
  }, [i18n]);
};
