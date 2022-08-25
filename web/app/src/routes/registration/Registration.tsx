import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { Logo } from '../../components/header/components/logo';
import { UserForm } from '../../components/userForm';
import { useHideHeader } from '../../hooks/useHideHeader';
import { HOME } from '../routes.const';
import { Container, ContentContainer, LogoWrapper } from './Styles';

export const Registration = () => {
  const { t } = useTranslation();
  const history = useHistory();
  useHideHeader();

  const registerClickHandler = () => {
    history.replace(HOME);
  };

  return (
    <Container>
      <LogoWrapper>
        <Logo allowGoToHome={false} />
      </LogoWrapper>

      <ContentContainer>
        <UserForm />

        <Button type="primary" style={{ width: '100%' }} shape="round" onClick={registerClickHandler}>
          {t('routes.registration.registrationButton')}
        </Button>
      </ContentContainer>
    </Container>
  );
};
