import { EpisodeBase, GenreBase, ImageInfo, SeasonBase, TVBase } from '../base-types';
import { CastMember, CrewMember } from '../credits/types';

/* ============================================================
   TV SERIES DETAILS
============================================================ */

/** Full TV series details */
export interface TvSeriesDetails extends TVBase {
  overview: string;
  homepage: string;
  genres: GenreBase[];
  episode_run_time: number[];
  number_of_episodes: number;
  number_of_seasons: number;
  seasons: SeasonBase[];
  last_air_date?: string;
  status?: string;
  tagline?: string;
  type?: string;
}

/** Response for TV lists (airing today, popular, etc.) */
export interface AiringTodayResponse {
  page: number;
  results: TVBase[];
  total_pages: number;
  total_results: number;
}

/** Query parameters for TV lists */
export interface TvListQuery {
  language?: string;
  page?: number;
  region?: string;
}

/* ============================================================
   EPISODE & SEASON DETAILS
============================================================ */

/** Detailed season info */
export interface TvSeasonDetails extends SeasonBase {
  episodes?: EpisodeBase[];
}

/** Guest star info */
export interface GuestStar {
  character: string;
  credit_id: string;
  order: number;
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}

/** Detailed episode info */
export interface TvEpisodeDetails extends EpisodeBase {
  crew: CrewMember[];
  guest_stars: GuestStar[];
}

/* ============================================================
   ACCOUNT STATES & RATINGS
============================================================ */

export interface AccountState {
  id: number;
  favorite: boolean;
  rated?: { value: number };
  watchlist: boolean;
}

export interface AddRatingRequest {
  value: number; // 0.5–10.0
}

export interface RatingResponse {
  status_code: number;
  status_message: string;
}

/* ============================================================
   CREDITS, CHANGES, IMAGES, VIDEOS, ETC.
============================================================ */

export interface AggregatedCredits {
  id: number;
  cast: {
    id: number;
    name: string;
    character?: string;
    order?: number;
    profile_path?: string | null;
  }[];
  crew: {
    id: number;
    name: string;
    department: string;
    job: string;
    profile_path?: string | null;
  }[];
}

export interface ChangeItem {
  key: string;
  items: Array<{ id: string; action: string; time: string }>;
}

export interface ChangesResponse {
  id: number;
  changes: ChangeItem[];
}

export interface CreditsResponse {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
}

export interface TvExternalIds {
  id: number;
  imdb_id: string | null;
  freebase_mid: string | null;
  freebase_id: string | null;
  tvdb_id: number | null;
  tvrage_id: number | null;
  wikidata_id: string | null;
  facebook_id: string | null;
  instagram_id: string | null;
  twitter_id: string | null;
}

export interface TvSeasonExternalIds {
  id: number;
  freebase_mid: string | null;
  freebase_id: string | null;
  tvdb_id: number | null;
  tvrage_id: number | null;
  wikidata_id: string | null;
}

export interface TvEpisodeExternalIds {
  id: number;
  imdb_id: string | null;
  freebase_mid: string | null;
  freebase_id: string | null;
  tvdb_id: number | null;
  tvrage_id: number | null;
  wikidata_id: string | null;
}

export interface ImagesResponse {
  id: number;
  backdrops?: ImageInfo[];
  posters?: ImageInfo[];
  stills?: ImageInfo[];
}

export interface VideosResponse {
  id: number;
  results: Array<{
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
  }>;
}

/* ============================================================
   TRANSLATIONS & PROVIDERS
============================================================ */

export interface TvTranslation<T = unknown> {
  iso_3166_1: string;
  iso_639_1: string;
  name: string;
  english_name: string;
  data: T;
}

export interface TranslationsResponse<T = unknown> {
  id: number;
  translations: Array<TvTranslation<T>>;
}

export interface TvWatchProvidersResponse {
  id: number;
  results: Record<
    string,
    {
      link: string;
      flatrate?: ProviderInfo[];
      rent?: ProviderInfo[];
      buy?: ProviderInfo[];
    }
  >;
}

export interface ProviderInfo {
  display_priority: number;
  logo_path: string;
  provider_id: number;
  provider_name: string;
}

/* ============================================================
   MISC RESPONSES
============================================================ */

export interface ContentRatingsResponse {
  id: number;
  results: Array<{ iso_3166_1: string; rating: string }>;
}

export interface KeywordsResponse {
  id: number;
  results: Array<{ id: number; name: string }>;
}

export interface ReviewsResponse {
  id: number;
  page: number;
  results: Review[];
  total_pages: number;
  total_results: number;
}

export interface Review {
  id: string; 
  author: string; 
  author_details: {
    name: string;
    username: string;
    avatar_path: string | null;
    rating: number | null;
  };
  content: string; 
  created_at: string; 
  updated_at: string; 
  url: string 
}

export interface TvRecommendationsResponse {
  id: number;
  page: number;
  results: TVBase[];
  total_pages: number;
  total_results: number;
}

export interface SimilarResponse {
  id: number;
  page: number;
  results: TVBase[];
  total_pages: number;
  total_results: number;
}

export interface LatestResponse {
  id: number;
  name: string;
  overview?: string;
}

export interface EpisodeGroup {
  id: string;
  name: string;
  description?: string;
  episode_count: number;
  network?: string;
  type?: string;
}

export interface TvEpisodeGroupDetails {
  id: number;
  name: string;
  description?: string;
  type: string;
  season_count: number;
  episode_count: number;
  network: {
    id: number;
    name: string;
    logo_path?: string | null;
    origin_country: string;
  };
  episodes: EpisodeBase[];
}
