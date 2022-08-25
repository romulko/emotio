import { useTranslation } from 'react-i18next';

import { SubTitle } from '../subTitle';

export const NoEntryMessage = () => {
  const { t } = useTranslation();

  return <SubTitle>{t('components.noEntryMessage.title')}</SubTitle>;
};
