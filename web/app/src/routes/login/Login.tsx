import GoogleLogin from 'react-google-login';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';

import { Logo } from '../../components/header/components/logo';
import { GOOGLE_CLIENT_ID } from '../../config';
import { defaultLanguage } from '../../utils/app.utils';
import { HOME, REGISTRATION } from '../routes.const';
import { useLoginMutations } from './data';
import { useChooseLanguage } from './hooks/useChooseLanguage';
import { useRedirectIfLoggedIn } from './hooks/useRedirectIfLoggedIn';
import { Container, ContentContainer } from './Styles';

export const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { login } = useLoginMutations();
  const { t } = useTranslation();

  useRedirectIfLoggedIn();

  useChooseLanguage();

  const googleSignInSuccessHandler = async (response: any) => {
    const { email, givenName, imageUrl } = response.profileObj;
    const { data } = await login({ email, name: givenName, photo: imageUrl, languageCode: defaultLanguage() });

    if (!data) {
      return;
    }

    const { isRegistered } = data.login;

    let path;

    if (isRegistered) {
      const { from } = (location.state as any) || { from: { pathname: HOME } };
      path = from;
    } else {
      path = REGISTRATION;
    }

    history.replace(path);
  };

  return (
    <Container>
      <Logo allowGoToHome={false} />

      <ContentContainer>
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText={t('routes.login.loginButton')}
          onSuccess={googleSignInSuccessHandler}
          cookiePolicy={'single_host_origin'}
        />
      </ContentContainer>
    </Container>
  );
};
