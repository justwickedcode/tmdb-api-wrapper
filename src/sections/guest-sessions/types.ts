export interface RatedMovie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  rating: number;
}

export interface RatedTVShow {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
  rating: number;
}

export interface RatedTVEpisode {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string | null;
  vote_average: number;
  vote_count: number;
  rating: number;
}

export interface GuestSessionRatedMoviesOptions {
  language?: string;
  page?: number;
  sort_by?: 'created_at.asc' | 'created_at.desc';
}

export interface GuestSessionRatedTVShowsOptions {
  language?: string;
  page?: number;
  sort_by?: 'created_at.asc' | 'created_at.desc';
}

export interface GuestSessionRatedTVEpisodesOptions {
  language?: string;
  page?: number;
  sort_by?: 'created_at.asc' | 'created_at.desc';
}

export interface GuestSessionRatedMoviesResponse {
  page: number;
  results: RatedMovie[];
  total_pages: number;
  total_results: number;
}

export interface GuestSessionRatedTVShowsResponse {
  page: number;
  results: RatedTVShow[];
  total_pages: number;
  total_results: number;
}

export interface GuestSessionRatedTVEpisodesResponse {
  page: number;
  results: RatedTVEpisode[];
  total_pages: number;
  total_results: number;
}
