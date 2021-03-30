import { GraphQLClient } from 'graphql-request';

const urlGraphql = 'https://rickandmortyapi.com/graphql';

export const graphQlClient = new GraphQLClient(urlGraphql);
