import { useTranslation } from 'react-i18next';

import { SubTitle } from '../subTitle';

export const NotFound = () => {
  const { t } = useTranslation();

  return <SubTitle>{t('components.notFound.title')}</SubTitle>;
};
