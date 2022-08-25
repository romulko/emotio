import { gql } from '@apollo/client';
import { useCallback } from 'react';

import { useLoginMutation, UserLoginInput } from '../../../services/apollo/generated/graphql';

export const useLoginMutations = () => {
  const [loginMutation] = useLoginMutation();

  const login = useCallback(
    (loginUser: UserLoginInput) =>
      loginMutation({
        variables: { user: loginUser },
        update(cache, { data }) {
          if (!data) {
            return;
          }

          const login = data.login;

          localStorage.setItem('token', login.token);
        },
      }),
    [loginMutation],
  );

  return {
    login,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const query = gql`
  mutation login($user: UserLoginInput!) {
    login(user: $user) {
      token
      isRegistered
    }
  }
`;
