import { ApolloClient, ApolloLink, ApolloProvider, from, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { createUploadLink } from 'apollo-upload-client';
import { FC } from 'react';

import { SERVER_URL } from '../../config';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        abcs: {
          merge: (_, incoming) => incoming,
        },
      },
    },
  },
});

const httpLink: ApolloLink = createUploadLink({
  uri: SERVER_URL,
}) as unknown as ApolloLink;

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );

  if (networkError) console.error(`[Network error]: ${networkError}`);
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token');

  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  }));

  return forward(operation);
});

const apolloClient = new ApolloClient({
  cache,
  link: from([authMiddleware, errorLink, httpLink]),
});

export const Apollo: FC = ({ children }) => <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
