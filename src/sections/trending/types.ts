export type TrendingMediaType = 'all' | 'movie' | 'tv' | 'person';
export type TrendingTimeWindow = 'day' | 'week';

export interface TrendingResultBase {
  id: number;
  popularity: number;
  media_type: TrendingMediaType;
  backdrop_path?: string | null;
  poster_path?: string | null;
  overview?: string;
  original_language?: string;
  title?: string;
  name?: string;
  adult?: boolean;
}

export interface TrendingMovieResult extends TrendingResultBase {
  media_type: 'movie';
  release_date?: string;
  genre_ids?: number[];
}

export interface TrendingTvResult extends TrendingResultBase {
  media_type: 'tv';
  first_air_date?: string;
  genre_ids?: number[];
}

export interface TrendingPersonResult extends TrendingResultBase {
  media_type: 'person';
  profile_path?: string | null;
  known_for: (TrendingMovieResult | TrendingTvResult)[];
  gender: number;
  name: string;
}

export interface PaginatedTrendingResponse<T> {
  page: number;
  results: T[];
  total_results: number;
  total_pages: number;
}
