export interface SearchResultBase {
  id: number;
  popularity: number;
  backdrop_path: string | null;
  poster_path?: string | null;
  overview?: string;
  original_language?: string;
  title?: string;
  name?: string;
  adult?: boolean;
  media_type?: string;
}

export interface SearchCollectionResult extends SearchResultBase {
  media_type: 'collection';
  name: string;
}

export interface SearchCompanyResult extends SearchResultBase {
  media_type: 'company';
  description: string | null;
  logo_path: string | null;
}

export interface SearchKeywordResult {
  id: number;
  name: string;
}

export interface SearchMovieResult extends SearchResultBase {
  media_type: 'movie';
  release_date?: string;
  genre_ids?: number[];
}

export interface SearchPersonResult extends SearchResultBase {
  media_type: 'person';
  known_for: (SearchMovieResult | SearchTvResult)[];
  gender: number;
  profile_path: string | null;
}

export interface SearchTvResult extends SearchResultBase {
  media_type: 'tv';
  first_air_date?: string;
  genre_ids?: number[];
}

export interface PaginatedSearchResponse<T> {
  page: number;
  results: T[];
  total_results: number;
  total_pages: number;
}
