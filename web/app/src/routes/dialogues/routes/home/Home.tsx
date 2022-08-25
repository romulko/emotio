import { useTranslation } from 'react-i18next';

import { PageContainer } from '../../../../components/pageContainer';
import { PageHeader } from '../../../../components/pageHeader/PageHeader';
import { CreateDialogueButton } from '../../components/createDialogueButton';
import { Dialogues } from './components/dialogues';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <PageHeader title={t('menu.dialogues')} rightComponents={<CreateDialogueButton />} />

      <Dialogues />
    </PageContainer>
  );
};
