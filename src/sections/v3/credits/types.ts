/** ----------------------------------------
 * Media Base (shared between movie/TV)
 * ---------------------------------------- */
export interface MediaBase {
  id: number;
  media_type: 'movie' | 'tv';
  adult?: boolean;
  backdrop_path?: string | null;
  poster_path?: string | null;
  original_language?: string;
  original_name?: string;
  original_title?: string;
  name?: string;
  title?: string;
  overview?: string;
  genre_ids?: number[];
  popularity?: number;
  vote_average?: number;
  vote_count?: number;
  first_air_date?: string;
  release_date?: string;
  origin_country?: string[];
  video?: boolean;
}

/** ----------------------------------------
 * Episode for TV shows
 * ---------------------------------------- */
export interface Episode {
  air_date: string;
  episode_count?: number;
  id: number;
  name: string;
  overview?: string;
  poster_path?: string | null;
  season_number: number;
  show_id?: number;
  media_type?: 'tv';
}

/** ----------------------------------------
 * Season for TV shows
 * ---------------------------------------- */
export interface Season {
  air_date?: string;
  episode_count: number;
  id: number;
  name: string;
  overview?: string;
  poster_path?: string | null;
  season_number: number;
  show_id?: number;
  media_type?: 'tv';
}

/** ----------------------------------------
 * Person object
 * ---------------------------------------- */
export interface Person {
  id: number;
  name: string;
  original_name?: string;
  media_type?: 'person';
  adult?: boolean;
  gender?: number;
  known_for_department?: string;
  profile_path?: string | null;
  popularity?: number;
}

/** ----------------------------------------
 * Credit Details
 * ---------------------------------------- */
export interface CreditDetails {
  credit_type: string;
  department: string;
  job?: string;
  media: MediaBase & {
    episodes?: Episode[];
    seasons?: Season[];
    character?: string;
  };
  person: Person;
}
