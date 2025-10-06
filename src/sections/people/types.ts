export interface PersonSummary {
  adult: boolean;
  gender: number;
  id: number;
  known_for: KnownFor[];
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string | null;
}

export interface KnownFor {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  media_type: string;
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

export interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface PersonDetails {
  birthday: string | null;
  known_for_department: string;
  deathday: string | null;
  id: number;
  name: string;
  also_known_as: string[];
  gender: number;
  biography: string;
  popularity: number;
  place_of_birth: string | null;
  profile_path: string | null;
  adult: boolean;
  imdb_id: string | null;
  homepage: string | null;
}

export interface PersonChanges {
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

export interface PersonCombinedCredits {
  id: number;
  cast: any[];
  crew: any[];
}

export interface PersonExternalIds {
  imdb_id: string | null;
  freebase_mid: string | null;
  freebase_id: string | null;
  tvdb_id: number | null;
  tvrage_id: number | null;
  facebook_id: string | null;
  instagram_id: string | null;
  twitter_id: string | null;
  id: number;
}

export interface PersonImages {
  id: number;
  profiles: PersonImage[];
}

export interface PersonLatest {
  id: number;
  name: string;
  adult: boolean;
  gender: number;
  popularity: number;
  profile_path: string | null;
}

export interface PersonMovieCredits {
  id: number;
  cast: any[];
  crew: any[];
}

export interface PersonTvCredits {
  id: number;
  cast: any[];
  crew: any[];
}

export interface PersonTranslations {
  id: number;
  translations: Translation[];
}

export interface PersonImage {
  aspect_ratio: number;
  height: number;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface Translation {
  iso_3166_1: string;
  iso_639_1: string;
  name: string;
  english_name: string;
}
