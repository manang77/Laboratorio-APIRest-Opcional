interface Info {
  count: number;
  pages: number;
}

export interface Character {
  id: number;
  name: string;
  image: string;
}

export interface RickAndMortyApiModel {
  info: Info;
  results: Character[];
}

export interface RickAndMorthyCharactersResponse {
  data: RickAndMortyApiModel;
}

export const getNewRickAndMortyApiModel = () => {
  const info: Info = {
    count: 0,
    pages: 0,
  };
  return {
    info: info,
    results: [],
  };
};
