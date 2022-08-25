import i18n from 'i18next';
import { FC } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';

import ru from './translations/ru.json';
import uk from './translations/uk.json';

i18n.use(initReactI18next).init({
  nsSeparator: false,
  lng: 'uk',
  ns: ['common'],
  defaultNS: 'common',
  resources: {
    uk: {
      common: uk,
    },
    ru: {
      common: ru,
    },
  },
});

export const I18NProvider: FC = ({ children }) => <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
