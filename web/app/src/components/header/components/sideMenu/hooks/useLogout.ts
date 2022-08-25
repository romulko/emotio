import { useApolloClient } from '@apollo/client';
import { useGoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';

import { GOOGLE_CLIENT_ID } from '../../../../../config';
import { HOME } from '../../../../../routes/routes.const';

export const useLogOut = () => {
  const history = useHistory();
  const apolloClient = useApolloClient();
  const { signOut } = useGoogleLogout({
    clientId: GOOGLE_CLIENT_ID,
    onLogoutSuccess: () => {
      // do nothing
    },
  });

  const logOut = async () => {
    apolloClient.stop();
    await apolloClient.resetStore();
    signOut();
    localStorage.removeItem('token');
    history.replace(HOME);
  };

  return { logOut };
};
