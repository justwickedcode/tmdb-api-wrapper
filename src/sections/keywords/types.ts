/** Base movie type for keyword results */
export interface MovieBase {
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
}

/** Keyword details */
export interface KeywordDetails {
  id: number;
  name: string;
}

/** Keyword movies response */
export interface KeywordMoviesResponse {
  id: number;
  page: number;
  results: MovieBase[];
  total_pages: number;
  total_results: number;
}

/** Options for fetching movies by keyword */
export interface KeywordMoviesOptions {
  language?: string;
  include_adult?: boolean;
  page?: number;
}
