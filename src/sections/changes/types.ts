/** Represents a single changed entity (movie, TV show, or person) */
export interface ChangedEntity {
  id: number;
  adult: boolean;
}

/** Generic paginated response for change lists */
export interface PaginatedChangesResponse {
  results: ChangedEntity[];
  page: number;
  total_pages: number;
  total_results: number;
}

/** Specific aliases for clarity and autocompletion */
export type MovieChangesResponse = PaginatedChangesResponse;
export type TVChangesResponse = PaginatedChangesResponse;
export type PersonChangesResponse = PaginatedChangesResponse;
