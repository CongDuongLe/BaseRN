import { AnimeListType } from 'src/Types/AnimeType';
import http from '../Https';

export const getPopularAnime = (type: string | number) => {
  return http.get<AnimeListType>('popular', {
    params: {
      type,
    },
  });
};
