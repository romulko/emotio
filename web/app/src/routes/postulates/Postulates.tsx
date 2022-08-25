import { useTranslation } from 'react-i18next';

import { PageContainer } from '../../components/pageContainer';
import { PageHeader } from '../../components/pageHeader/PageHeader';
import { Container, Text } from './Styles';

export const Postulates = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <PageHeader title={t('menu.postulates')} />

      <Container>
        <Text>{t('routes.postulates.emotioTarget')}</Text>

        <Text>{t('routes.postulates.emotionsAlwaysTrue')}</Text>

        <Text>{t('routes.postulates.mindsTriggersEmotions')}</Text>

        <Text>{t('routes.postulates.emotionsVsCommonSens')}</Text>

        <Text>{t('routes.postulates.selfConfidence')}</Text>

        <Text>{t('routes.postulates.target')}</Text>
      </Container>
    </PageContainer>
  );
};
