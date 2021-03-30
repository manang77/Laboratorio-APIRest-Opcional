import { graphQlClient } from 'core/api';
import { gql } from 'graphql-request';
import { EpisodeDetailApiModel, EpisodeDetailApiModelResponse } from './episode-detail.api.model';

export const getEpisodeDetail = async (
  id: string
): Promise<EpisodeDetailApiModel> => {

  const query = gql`
    query {
      episode: episodesByIds (ids:["${id}"])
      {
      id, name, characters {id, name, image}
    }
  }
  `;
  const response = await graphQlClient.request<EpisodeDetailApiModelResponse>(query);
  return response.episode[0];
};

