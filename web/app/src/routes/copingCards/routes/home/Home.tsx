import { useTranslation } from 'react-i18next';

import { PageContainer } from '../../../../components/pageContainer';
import { PageHeader } from '../../../../components/pageHeader/PageHeader';
import { CreateCopingCardButton } from '../../components/createCopingCardButton';
import { CopingCardsList } from './components/copingCardsList';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <PageHeader title={t('menu.copingCards')} rightComponents={<CreateCopingCardButton />} />

      <CopingCardsList />
    </PageContainer>
  );
};
