export interface AccountMediaSummary {
  id: number;
  media_type: 'movie' | 'tv';
  title?: string;
  name?: string;
  overview?: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
  vote_average?: number;
  vote_count?: number;
  release_date?: string;
}

export interface AccountMediaListResponse {
  page: number;
  results: AccountMediaSummary[];
  total_pages: number;
  total_results: number;
}

export interface AccountListSummary {
  id: number;
  name: string;
  description: string;
  favorite_count: number;
  item_count: number;
  iso_639_1: string;
  poster_path?: string | null;
}

export interface AccountListResponse {
  page: number;
  results: AccountListSummary[];
  total_pages: number;
  total_results: number;
}

export interface AccountMediaActionRequest {
  media_type: 'movie' | 'tv';
  media_id: number;
  favorite?: boolean;
  watchlist?: boolean;
}

export interface AccountRateRequest {
  media_type: 'movie' | 'tv';
  media_id: number;
  value: number; // 0.5–10
}
