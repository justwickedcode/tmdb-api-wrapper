export interface TvEpisodeSummary {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  season_number: number;
  production_code?: string;
  still_path?: string | null;
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
  episodes: TvEpisodeSummary[];
}

export interface TvSeriesSummary {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  first_air_date?: string;
  origin_country?: string[];
  original_language?: string;
  backdrop_path?: string | null;
  poster_path?: string | null;
  genre_ids?: number[];
  adult?: boolean;
}

export interface PaginatedTvSeriesResponse {
  page: number;
  results: TvSeriesSummary[];
  total_results: number;
  total_pages: number;
}

export interface TvListQuery {
  language?: string;
  page?: number;
  region?: string;
}

export interface TvSeasonDetails {
  id: number;
  air_date?: string;
  name: string;
  overview: string;
  season_number: number;
  episodes?: TvEpisodeSummary[];
  poster_path?: string | null;
  show_id: number;
}

export interface AccountState {
  id: number;
  favorite: boolean;
  rated?: { value: number };
  watchlist: boolean;
}

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
  changes: ChangeItem[];
  id: number;
}

export interface CreditsResponse {
  id: number;
  cast: {
    id: number;
    name: string;
    character: string;
    order: number;
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

export interface ExternalIds {
  id: number;
  imdb_id?: string;
  tvdb_id?: number;
  freebase_mid?: string;
  freebase_id?: string;
  tvrage_id?: number;
}

export interface ImagesResponse {
  id: number;
  posters: { file_path: string; width: number; height: number; iso_639_1?: string | null }[];
}

export interface Translation {
  iso_3166_1: string;
  iso_639_1: string;
  name: string;
  english_name: string;
  data: TvSeasonDetails;
}

export interface TranslationsResponse {
  id: number;
  translations: Translation[];
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

export interface WatchProvidersResponse {
  id: number;
  results: Record<
    string,
    {
      link: string;
      flatrate?: {
        display_priority: number;
        logo_path: string;
        provider_id: number;
        provider_name: string;
      }[];
      rent?: {
        display_priority: number;
        logo_path: string;
        provider_id: number;
        provider_name: string;
      }[];
      buy?: {
        display_priority: number;
        logo_path: string;
        provider_id: number;
        provider_name: string;
      }[];
    }
  >;
}

export interface TvEpisodeDetails {
  id: number;
  name: string;
  overview: string;
  air_date?: string;
  episode_number: number;
  season_number: number;
  show_id: number;
  still_path?: string | null;
  vote_average?: number;
  vote_count?: number;
}

export interface ChangeItem {
  key: string;
  items: Array<{ id: string; action: string; time: string }>;
}

export interface ChangesResponse {
  changes: ChangeItem[];
  id: number;
}

export interface CreditsResponse {
  id: number;
  cast: {
    id: number;
    name: string;
    character: string;
    order: number;
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

export interface ExternalIds {
  id: number;
  imdb_id?: string;
  tvdb_id?: number;
  freebase_mid?: string;
  freebase_id?: string;
  tvrage_id?: number;
}

export interface ImagesResponse {
  id: number;
  stills: { file_path: string; width: number; height: number; iso_639_1?: string | null }[];
}

export interface TranslationsResponse {
  id: number;
  translations: Translation[];
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

export interface AddRatingRequest {
  value: number; // 0.5–10.0
}

export interface RatingResponse {
  status_code: number;
  status_message: string;
}

export interface TvSeriesDetails {
  id: number;
  name: string;
  overview: string;
  number_of_episodes?: number;
  number_of_seasons?: number;
  seasons?: {
    id: number;
    name: string;
    episode_count: number;
    season_number: number;
    air_date?: string;
    poster_path?: string | null;
  }[];
  first_air_date?: string;
  last_air_date?: string;
  original_language?: string;
  status?: string;
  tagline?: string;
  type?: string;
  vote_average?: number;
  vote_count?: number;
}

export interface AggregateCreditsResponse {
  id: number;
  cast: Array<{
    id: number;
    name: string;
    character: string;
    order: number;
    profile_path?: string | null;
  }>;
  crew: Array<{
    id: number;
    name: string;
    department: string;
    job: string;
    profile_path?: string | null;
  }>;
}

export interface AlternativeTitlesResponse {
  id: number;
  results: Array<{ iso_3166_1: string; title: string; type?: string }>;
}

export interface ChangeItem {
  key: string;
  items: Array<{ id: string; action: string; time: string }>;
}

export interface ChangesResponse {
  changes: ChangeItem[];
  id: number;
}

export interface ContentRatingsResponse {
  id: number;
  results: Array<{ iso_3166_1: string; rating: string }>;
}

export interface CreditsResponse {
  id: number;
  cast: Array<{
    id: number;
    name: string;
    character: string;
    order: number;
    profile_path?: string | null;
  }>;
  crew: Array<{
    id: number;
    name: string;
    department: string;
    job: string;
    profile_path?: string | null;
  }>;
}

export interface EpisodeGroup {
  id: string;
  name: string;
  description?: string;
  episode_count: number;
  network?: string;
  type?: string;
}

export interface ExternalIds {
  id: number;
  imdb_id?: string;
  tvdb_id?: number;
  freebase_mid?: string;
  freebase_id?: string;
  tvrage_id?: number;
}

export interface ImagesResponse {
  id: number;
  backdrops: { file_path: string; width: number; height: number; iso_639_1?: string | null }[];
  posters: { file_path: string; width: number; height: number; iso_639_1?: string | null }[];
}

export interface KeywordsResponse {
  id: number;
  results: Array<{ id: number; name: string }>;
}

export interface LatestResponse {
  id: number;
  name: string;
  overview?: string;
}

export interface ListsResponse {
  id: number;
  results: Array<{
    id: number;
    name: string;
    description: string;
    item_count: number;
    poster_path?: string | null;
  }>;
}

export interface RecommendationsResponse {
  id: number;
  page: number;
  results: Array<{ id: number; name: string; overview?: string; poster_path?: string | null }>;
  total_pages: number;
  total_results: number;
}

export interface ReviewsResponse {
  id: number;
  page: number;
  results: Array<{ id: string; author: string; content: string; url: string }>;
  total_pages: number;
  total_results: number;
}

export interface SimilarResponse {
  id: number;
  page: number;
  results: Array<{ id: number; name: string; overview?: string; poster_path?: string | null }>;
  total_pages: number;
  total_results: number;
}

export interface TranslationsResponse {
  id: number;
  translations: Translation[];
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

export interface AddRatingRequest {
  value: number; // 0.5–10.0
}

export interface RatingResponse {
  status_code: number;
  status_message: string;
}
