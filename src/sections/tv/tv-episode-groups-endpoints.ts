import HttpConnector from '../../http-connector';
import { TvEpisodeGroupDetails } from './types';

const BASE_PATH = '/tv/episode_group';

export class TvEpisodeGroupsEndpoints {
  constructor(private readonly http: HttpConnector) {}

  /** Get details of a TV episode group by ID */
  getDetails(episode_group_id: string): Promise<TvEpisodeGroupDetails> {
    return this.http.get<TvEpisodeGroupDetails>(`${BASE_PATH}/${episode_group_id}`);
  }
}
