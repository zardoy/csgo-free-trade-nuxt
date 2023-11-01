import { defineApolloClient } from '@nuxtjs/apollo';

export default defineApolloClient({
  // The GraphQL endpoint.
  httpEndpoint: 'http://localhost:3030/graphql',

  // Provide a GraphQL endpoint to be used client-side. Overrides `httpEndpoint`.
  // browserHttpEndpoint: '/graphql',

  // See https://www.apollographql.com/docs/link/links/http.html#options
  httpLinkOptions: {
  },

  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },

  tokenName: 'token',
});
