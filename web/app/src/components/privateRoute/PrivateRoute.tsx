import { FC } from 'react';
import { RouteProps } from 'react-router';
import { Redirect, Route } from 'react-router-dom';

import { useLoggedUser } from '../../data';
import { LOGIN } from '../../routes/routes.const';
import { Header } from '../header';

export const PrivateRoute: FC<RouteProps> = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => {
      const token = localStorage.getItem('token');

      return token ? (
        <>
          <Header />

          <CheckUserLoggedIn>{children}</CheckUserLoggedIn>
        </>
      ) : (
        <Redirect
          to={{
            pathname: LOGIN,
            state: { from: location },
          }}
        />
      );
    }}
  />
);

const CheckUserLoggedIn: FC = ({ children }) => {
  const { loggedUser } = useLoggedUser();

  if (!loggedUser) {
    return <></>;
  }

  return <>{children}</>;
};
