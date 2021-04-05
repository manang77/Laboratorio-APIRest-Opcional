import { graphQlClient } from 'core/api';
import { gql } from 'graphql-request';
import {
  RickAndMortyApiModel,
  RickAndMorthyCharactersResponse
} from './rick-and-morty.api.model';

export const getRickAndMorthyCharacters = async (
  page: number,
  name: string
): Promise<RickAndMortyApiModel> => {

  const query = gql`
    query {
      data: characters(page: ${page}, filter: {name: "${name}"}) {
        info {
          count, pages
        }
        results {
          id, name, image
        }
      }
    }
  `;
  const response = await graphQlClient.request<RickAndMorthyCharactersResponse>(query);
  return response.data;
};

