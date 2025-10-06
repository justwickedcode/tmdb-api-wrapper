import HttpConnector from '../../http-connector';
import { TvEpisodeGroupDetails } from './types';

const BASE_PATH = '/tv/episode_group';

export class TvEpisodeGroupsEndpoints {
  private readonly http: HttpConnector;

  constructor(http: HttpConnector) {
    this.http = http;
  }

  /** Get details of a TV episode group by ID */
  getDetails(episode_group_id: string): Promise<TvEpisodeGroupDetails> {
    return this.http.get<TvEpisodeGroupDetails>(`${BASE_PATH}/${episode_group_id}`);
  }
}
