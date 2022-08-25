import { useTranslation } from 'react-i18next';

import { SubTitle } from '../subTitle';

export const LoadingIndicator = () => {
  const { t } = useTranslation();

  return <SubTitle>{t('components.loadingIndicator.title')}</SubTitle>;
};
