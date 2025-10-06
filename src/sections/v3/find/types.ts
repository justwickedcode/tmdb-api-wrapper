// Base type for a movie result from find
export interface FindMovie {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// Base type for a TV show result from find
export interface FindTV {
  backdrop_path: string | null;
  first_air_date?: string;
  genre_ids: number[];
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  origin_country: string[];
  poster_path: string | null;
  media_type: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
}

// Base type for a person result from find
export interface FindPerson {
  adult: boolean;
  gender?: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  media_type: string;
  known_for?: FindMovie[] | FindTV[];
}

// Full response type
export interface FindResponse {
  movie_results: FindMovie[];
  tv_results: FindTV[];
  tv_episode_results: any[];
  tv_season_results: any[];
  person_results: FindPerson[];
}
