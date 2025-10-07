// Base type for a movie result from find
import { EpisodeBase, MovieBase, PersonBase, SeasonBase, TVBase } from '../base-types';

export interface FindMovie extends MovieBase {
  media_type: 'movie';
}

// Base type for a TV show result from find
export interface FindTV extends TVBase {
  media_type: 'tv';
}

// Base type for a person result from find
export interface FindPerson extends PersonBase {
  known_for?: FindMovie[] | FindTV[];
}

export interface FindEpisode extends EpisodeBase {
  media_type: 'tv_episode';
}

export interface FindSeason extends SeasonBase {
  media_type: 'tv_season';
}

// Full response type
export interface FindResponse {
  movie_results: FindMovie[];
  tv_results: FindTV[];
  tv_episode_results: FindEpisode[];
  tv_season_results: FindSeason[];
  person_results: FindPerson[];
}
