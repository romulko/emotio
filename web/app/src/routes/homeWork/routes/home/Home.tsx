import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { CreateButton } from '../../../../components/buttons/createButton';
import { PageContainer } from '../../../../components/pageContainer';
import { PageHeader } from '../../../../components/pageHeader/PageHeader';
import { HOME_WORKS_CREAT } from '../../../routes.const';
import { HomeWorks } from './components/homeWorks';

export const Home = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const createHandler = () => history.push(HOME_WORKS_CREAT);

  return (
    <PageContainer>
      <PageHeader title={t('menu.homeWorks')} rightComponents={<CreateButton onClick={createHandler} />} />

      <HomeWorks />
    </PageContainer>
  );
};
