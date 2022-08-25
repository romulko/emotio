import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export const useRedirectIfLoggedIn = () => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const { from } = (location.state as any) || { from: { pathname: '/' } };
      history.replace(from);
    }
  }, [location, history]);
};
