/** Common image structure used by TmdbClient for posters/backdrops */
export interface TMDBImage {
  aspect_ratio: number;
  height: number;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

/** Movie or TV item belonging to a collection */
export interface CollectionPart {
  id: number;
  name: string;
  overview: string;
  adult: boolean;
  original_name?: string;
  original_language: string;
  poster_path: string | null;
  backdrop_path: string | null;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average?: number;
  vote_count?: number;
  media_type?: string;
}

/** Response: GET /collection/{id} */
export interface CollectionDetailsResponse {
  id: number;
  name: string;
  overview: string;
  original_language: string;
  original_name: string;
  poster_path: string | null;
  backdrop_path: string | null;
  parts: CollectionPart[];
}

/** Response: GET /collection/{id}/images */
export interface CollectionImagesResponse {
  id: number;
  backdrops: TMDBImage[];
  posters: TMDBImage[];
}

/** Translation content */
export interface CollectionTranslationData {
  title: string;
  overview: string;
  homepage: string;
}

/** A single translation entry */
export interface CollectionTranslation {
  iso_3166_1: string;
  iso_639_1: string;
  name: string;
  english_name: string;
  data: CollectionTranslationData;
}

/** Response: GET /collection/{id}/translations */
export interface CollectionTranslationsResponse {
  id: number;
  translations: CollectionTranslation[];
}
