import { PaginatedResponse } from '../base-types';

/** Represents a single changed entity (movie, TV show, or person) */
export interface ChangedEntity {
  id: number;
  adult: boolean;
}

/** Specific aliases for clarity and autocompletion */
export type MovieChangesResponse = PaginatedResponse<ChangedEntity>;
export type TVChangesResponse = PaginatedResponse<ChangedEntity>;
export type PersonChangesResponse = PaginatedResponse<ChangedEntity>;
