import { graphQlClient } from 'core/api';
import { gql } from 'graphql-request';
import {
  EpisodesApiModel, EpisodesApiModelResponse, getNewEpisodesApiModel
} from './episodes.api.model';

export const getEpisodes = async (
  page: number,
  name: string
): Promise<EpisodesApiModel> => {

  const query = gql`
    query {
      data: episodes(page: ${page}, filter: {name: "${name}"} ) {
        info {
          count, pages
        }
        results {
          id, name, air_date, episode
        }
      }
    }
  `;

  try {
    const response = await graphQlClient.request<EpisodesApiModelResponse>(query);
    return response.data;
  } catch {
    return getNewEpisodesApiModel();
  }
};
