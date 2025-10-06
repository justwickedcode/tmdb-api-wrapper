/** Represents a list creation request body */
export interface ListCreateRequest {
  name: string;
  description?: string;
  language?: string;
}

/** Represents a movie item being added/removed */
export interface ListItemRequest {
  media_id: number;
}

/** Generic list action response */
export interface ListActionResponse {
  status_code: number;
  status_message: string;
  success?: boolean;
  list_id?: number;
}

/** Response for checking item status */
export interface ListItemStatusResponse {
  id: number;
  item_present: boolean;
}

/** Represents a movie item in a list */
export interface ListMovieItem {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  media_type: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
}

/** Represents full list details */
export interface ListDetailsResponse {
  created_by: string;
  description: string;
  favorite_count: number;
  id: string;
  items: ListMovieItem[];
  item_count: number;
  iso_639_1: string;
  name: string;
  poster_path: string | null;
}
