import { graphQlClient } from 'core/api';
import { gql } from 'graphql-request';
import { RickAndMortyCharacterDataApi, RickAndMortyCharacterDataApiResponse } from './rick-and-morty-detail.api.model';

export const getRickAndMorthyCharacterDetail = async (
  id: string
): Promise<RickAndMortyCharacterDataApi> => {

  const query = gql`
    query {
      character: charactersByIds(ids:["${id}"])
        {
          id, name, status, species, gender, origin {id, name}, location {id, name}, image
      }
    }
  `;
  const response = await graphQlClient.request<RickAndMortyCharacterDataApiResponse>(query);
  return response.character[0];

};
