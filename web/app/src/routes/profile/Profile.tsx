import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

import { useLogOut } from '../../components/header/components/sideMenu/hooks/useLogout';
import { PageContainer } from '../../components/pageContainer';
import { PageHeader } from '../../components/pageHeader/PageHeader';
import { UserForm } from '../../components/userForm';

export const Profile = () => {
  const { t } = useTranslation();
  const { logOut } = useLogOut();

  const logoutClickHandler = () => logOut();

  return (
    <PageContainer>
      <PageHeader title={t('routes.profile.title')} />

      <UserForm />

      <Button shape="round" onClick={logoutClickHandler}>
        {t('menu.logOut')}
      </Button>
    </PageContainer>
  );
};
