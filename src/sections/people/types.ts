import { PaginatedResponse, PersonBase, ImageInfo } from '../base-types';
import { CastMember, CrewMember } from '../credits/types';

/** Summary for a person in listing responses */
export interface PersonSummary extends PersonBase {
  known_for: KnownFor[];
}

/** Media items the person is known for */
export interface KnownFor {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  media_type: 'movie' | 'tv';
  original_language: string;
  original_title?: string;
  overview: string;
  poster_path: string | null;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

/** Named wrappers for readability */
export type PopularPeopleResponse = PaginatedResponse<PersonSummary>;

/** Query parameters for people list endpoints */
export interface PeopleListQuery {
  language?: string; // defaults to 'en-US'
  page?: number; // defaults to 1
}

/** Person details */
export interface PersonDetailsResponse extends PersonBase {
  birthday: string | null;
  deathday: string | null;
  also_known_as: string[];
  biography: string;
  place_of_birth: string | null;
  imdb_id: string | null;
  homepage: string | null;
}

/** Person changes */
export interface PersonDetailedChangesResponse {
  id: number;
  changes: Array<{
    key: string;
    items: Array<{
      id?: string | number;
      action: string;
      time: string;
      original_value: any;
      value: any;
    }>;
  }>;
}

/** Combined credits (movie + TV) */
export interface PersonCombinedCreditsResponse {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
}

/** External IDs */
export interface PersonExternalIdsResponse {
  id: number;
  imdb_id: string | null;
  freebase_mid: string | null;
  freebase_id: string | null;
  tvdb_id: number | null;
  tvrage_id: number | null;
  facebook_id: string | null;
  instagram_id: string | null;
  twitter_id: string | null;
}

/** Images */
export interface PersonImagesResponse {
  id: number;
  profiles: ImageInfo[];
}

/** Latest person entry */
export interface PersonLatestResponse extends PersonBase {}

/** Credits (movies only) */
export interface PersonMovieCreditsResponse {
  id: number;
  cast: any[];
  crew: any[];
}

/** Credits (TV only) */
export interface PersonTvCreditsResponse {
  id: number;
  cast: any[];
  crew: any[];
}

/** Translations */
export interface PersonTranslationsResponse {
  id: number;
  translations: Translation[];
}

/** Translation entry */
export interface Translation {
  iso_3166_1: string;
  iso_639_1: string;
  name: string;
  english_name: string;
}
