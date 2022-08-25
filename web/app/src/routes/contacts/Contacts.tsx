import { useTranslation } from 'react-i18next';

import { PageContainer } from '../../components/pageContainer';
import { PageHeader } from '../../components/pageHeader/PageHeader';
import { ContactItem } from './components/contactItem';

export const Contacts = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <PageHeader title={t('menu.contacts')} />

      <ContactItem
        name={t('routes.contacts.RomanMalko.name')}
        description={t('routes.contacts.RomanMalko.description')}
        imgUrl="images/founder.jpeg"
        telegramUrl="http://t.me/romanmalko"
        email="roman.malko@gmail.com"
        facebookUrl="https://www.facebook.com/roma.malko"
      />
    </PageContainer>
  );
};
