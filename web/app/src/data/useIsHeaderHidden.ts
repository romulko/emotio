import { gql } from '@apollo/client';

import { useIsHeaderHiddenQuery } from '../services/apollo/generated/graphql';

export const useIsHeaderHidden = () => {
  const { data } = useIsHeaderHiddenQuery();

  return { isHeaderHidden: data?.isHeaderHidden };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const query = gql`
  query isHeaderHidden {
    isHeaderHidden @client
  }
`;
