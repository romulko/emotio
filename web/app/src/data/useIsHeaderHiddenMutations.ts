import { useApolloClient } from '@apollo/client';
import { useCallback } from 'react';

import { IsHeaderHiddenDocument, IsHeaderHiddenQuery } from '../services/apollo/generated/graphql';

export const useIsHeaderHiddenMutations = () => {
  const apolloClient = useApolloClient();

  const showHeader = useCallback(
    () =>
      apolloClient.writeQuery<IsHeaderHiddenQuery>({ query: IsHeaderHiddenDocument, data: { isHeaderHidden: false } }),
    [apolloClient],
  );

  const hideHeader = useCallback(
    () =>
      apolloClient.writeQuery<IsHeaderHiddenQuery>({ query: IsHeaderHiddenDocument, data: { isHeaderHidden: true } }),
    [apolloClient],
  );

  return { showHeader, hideHeader };
};
