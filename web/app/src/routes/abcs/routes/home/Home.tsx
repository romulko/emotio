import { useTranslation } from 'react-i18next';

import { CreateButton } from '../../../../components/buttons/createButton';
import { PageContainer } from '../../../../components/pageContainer';
import { PageHeader } from '../../../../components/pageHeader/PageHeader';
import { AbcList } from './components/abcList';
import { useCreateAbc } from './hooks/useCreateAbc';

export const Home = () => {
  const { t } = useTranslation();
  const { createAbc } = useCreateAbc();

  const createHandler = () => createAbc();

  return (
    <PageContainer>
      <PageHeader title={t('menu.abc')} rightComponents={<CreateButton onClick={createHandler} />} />

      <AbcList />
    </PageContainer>
  );
};
