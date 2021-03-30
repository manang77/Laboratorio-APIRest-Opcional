interface Origin {
  id: string;
  name: string;
}

interface Location {
  id: string;
  name: string;
}

export interface RickAndMortyCharacterDataApi {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
}

export interface RickAndMortyCharacterDataApiResponse {
  character: RickAndMortyCharacterDataApi;
}
