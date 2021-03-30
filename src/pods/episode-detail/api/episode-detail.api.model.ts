export interface CharacterDataApi {
  id: number,
  name: string,
  image: string;
}

export interface EpisodeDetailApiModel {
  id: number;
  name: string;
  characters: CharacterDataApi[];
}

export interface EpisodeDetailApiModelResponse {
  episode: EpisodeDetailApiModel;
}
