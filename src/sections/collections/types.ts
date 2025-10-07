import { ImageInfo } from '../base-types';

/** Basic information about a movie/TV item in a collection */
interface CollectionPart {
  id: number;
  adult: boolean;
  media_type: 'movie' | 'tv';
  overview: string;
  original_language: string;

  // Titles
  title?: string; // movies
  original_title?: string; // movies
  name?: string; // TV shows
  original_name?: string; // TV shows

  // Images
  poster_path?: string | null;
  backdrop_path?: string | null;

  genre_ids: number[];
  popularity: number;
  release_date?: string; // movies
  first_air_date?: string; // TV shows

  video?: boolean; // movies
  vote_average?: number;
  vote_count?: number;
}

/** Response for GET /collection/{id} */
export interface CollectionDetailsResponse {
  id: number;
  name: string;
  overview: string;
  original_name?: string;
  original_language: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
  parts: CollectionPart[];
}

/** Response for GET /collection/{id}/images */
export interface CollectionImagesResponse {
  id: number;
  backdrops: ImageInfo[];
  posters: ImageInfo[];
}

/** Translation content for a collection */
export interface CollectionTranslationData {
  title?: string;
  overview?: string;
  homepage?: string;
}

/** A single translation entry */
export interface CollectionTranslation {
  iso_3166_1: string; // country code
  iso_639_1: string; // language code
  name: string; // localized name
  english_name: string;
  data: CollectionTranslationData;
}

/** Response for GET /collection/{id}/translations */
export interface CollectionTranslationsResponse {
  id: number;
  translations: CollectionTranslation[];
}
