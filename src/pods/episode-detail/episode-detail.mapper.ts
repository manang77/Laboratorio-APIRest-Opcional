import { EpisodeDetailApiModel, CharacterDataApi } from './api';
import { EpisodeDetailVm, EpisodeCharVm } from './episode-detail.vm';

export const mapEpisodeFromApiToVM = async (
  episodeDetailApi: EpisodeDetailApiModel
): Promise<EpisodeDetailVm> => {
  const episodeyDetailVm: EpisodeDetailVm = {
    id: episodeDetailApi.id.toString(),
    name: episodeDetailApi.name,
    characters: episodeDetailApi.characters.map((characterApi) => {
      const characterVM: EpisodeCharVm = {
        id: characterApi.id.toString(),
        name: characterApi.name,
        image: characterApi.image
      }
      return characterVM;
    }),
  };
  return episodeyDetailVm;
};
