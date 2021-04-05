interface Info {
  count: number;
  pages: number;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

export interface EpisodesApiModel {
  info: Info;
  results: Episode[];
}

export interface EpisodesApiModelResponse {
  data: EpisodesApiModel;
}
