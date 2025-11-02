import { EpisodeBase, MovieBase, TVBase } from '../base-types';

//TODO: See if you can improve the types
/** Movie-specific fields */
export interface CreditsMovie extends MovieBase {
  media_type: 'movie';
  character: string;
}

/** TV-specific fields */
export interface CreditsTV extends TVBase {
  media_type: 'tv';
  character: string;
  episodes?: CreditsEpisode[];
  seasons?: CreditsSeason[];
}

/** Episode for TV shows */
export interface CreditsEpisode extends EpisodeBase {
  media_type: 'tv_episode';
}

/** Season for TV shows */
export interface CreditsSeason {
  id: number;
  name: string;
  overview?: string;
  poster_path?: string | null;
  season_number: number;
  air_date?: string;
  episode_count: number;
  show_id?: number;
  media_type?: 'tv';
}

/** Person object */
export interface CreditsPerson {
  id: number;
  name: string;
  original_name?: string;
  media_type?: 'person';
  adult?: boolean;
  gender?: number;
  known_for_department?: string;
  profile_path?: string | null;
  popularity?: number;
}

/** Credit details for a person on a movie or TV show */
export interface CreditDetailsResponse {
  id: string;
  credit_type: string;
  department: string;
  job: string;
  media: CreditsMovie | CreditsTV;
  media_type: 'movie' | 'tv';
  person: CreditsPerson;
}

export interface CastMember {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number | null;
  id: number;
  name: string;
  order: number;
  profile_path: string | null;
}

export interface CrewMember {
  credit_id: string;
  department: string;
  gender: number | null;
  id: number;
  job: string;
  name: string;
  profile_path: string | null;
}
