export interface EpisodeCharVm {
  id: string;
  name: string;
  image: string;
}

export interface EpisodeDetailVm {
  id: string;
  name: string;
  characters: EpisodeCharVm[];
}

export const getNewEpisodeDetailVm = (): EpisodeDetailVm => {
  return {
    id: '',
    name: '',
    characters: [],
  };
};
