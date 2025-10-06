// Base generic for paginated responses
export interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

// AccountEndpoints details
export interface AccountDetails {
  avatar: {
    gravatar: { hash: string | null };
    tmdb: { avatar_path: string | null };
  };
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  include_adult: boolean;
  username: string;
}

// AccountEndpoints lists
export interface AccountList {
  description: string;
  favorite_count: number;
  id: number;
  item_count: number;
  iso_639_1: string;
  list_type: string;
  name: string;
  poster_path: string | null;
}

// Add favorite / watchlist
export interface AddFavoriteRequestBody {
  media_type: 'movie' | 'tv';
  media_id: number;
  favorite: boolean;
}

export interface AddFavoriteResponse {
  status_code: number;
  status_message: string;
}

export interface AddToWatchlistRequestBody {
  media_type: 'movie' | 'tv';
  media_id: number;
  watchlist: boolean;
}

export interface AddToWatchlistResponse {
  status_code: number;
  status_message: string;
}

// Media base
export interface MediaBase {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  overview: string;
  popularity: number;
  poster_path: string | null;
  vote_average: number;
  vote_count: number;
}

// Movie type
export interface Movie extends MediaBase {
  original_language: string;
  original_title: string;
  release_date: string;
  title: string;
  video: boolean;
}

// TV type
export interface TV extends MediaBase {
  origin_country: string[];
  original_language: string;
  original_name: string;
  first_air_date: string;
  name: string;
}

// Rated TV episode type
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

// Paginated responses
export type FavoriteMoviesResponse = PaginatedResponse<Movie>;
export type FavoriteTVResponse = PaginatedResponse<TV>;
export type RatedMoviesResponse = PaginatedResponse<Movie & { rating: number }>;
export type RatedTVResponse = PaginatedResponse<TV & { rating: number }>;
export type RatedTVEpisodesResponse = PaginatedResponse<RatedTVEpisode>;
export type WatchlistMoviesResponse = PaginatedResponse<Movie>;
export type WatchlistTVResponse = PaginatedResponse<TV>;
export type AccountListsResponse = PaginatedResponse<AccountList>;
