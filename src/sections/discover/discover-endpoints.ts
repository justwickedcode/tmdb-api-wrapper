import HttpConnector from '../../http-connector';
import { DiscoverMovieResponse, DiscoverTVResponse } from './types';

// Discover query options
interface MovieDiscoverQueryParams {
  language?: string;
  region?: string;
  sortBy?: string;
  page?: number;
  includeAdult?: boolean;
  includeVideo?: boolean;
  primaryReleaseYear?: number;
  primaryReleaseDateGte?: string;
  primaryReleaseDateLte?: string;
  withGenres?: string;
  withoutGenres?: string;
  withCast?: string;
  withCrew?: string;
  withCompanies?: string;
  withoutCompanies?: string;
  withKeywords?: string;
  withoutKeywords?: string;
  voteAverageGte?: number;
  voteAverageLte?: number;
  voteCountGte?: number;
  voteCountLte?: number;
  withRuntimeGte?: number;
  withRuntimeLte?: number;
  withReleaseType?: string;
  year?: number;
  [key: string]: string | number | boolean | undefined;
}

interface TVDiscoverQueryParams {
  language?: string;
  sortBy?: string;
  page?: number;
  timezone?: string;
  includeNullFirstAirDates?: boolean;
  firstAirDateYear?: number;
  voteAverageGte?: number;
  voteAverageLte?: number;
  voteCountGte?: number;
  voteCountLte?: number;
  withGenres?: string;
  withoutGenres?: string;
  withNetworks?: number;
  withOriginCountry?: string;
  withOriginalLanguage?: string;
  withWatchProviders?: string;
  watchRegion?: string;
  withRuntimeGte?: number;
  withRuntimeLte?: number;
  withStatus?: string;
  withType?: string;
  [key: string]: string | number | boolean | undefined;
}

export class DiscoverEndpoints {
  private readonly http: HttpConnector;

  constructor(http: HttpConnector) {
    this.http = http;
  }

  /** Discover movies with query options */
  async getMovies(params?: MovieDiscoverQueryParams): Promise<DiscoverMovieResponse> {
    return this.http.get<DiscoverMovieResponse>('/discover/movie', { params });
  }

  /** Discover TV shows with query options */
  async getTVShows(params?: TVDiscoverQueryParams): Promise<DiscoverTVResponse> {
    return this.http.get<DiscoverTVResponse>('/discover/tv', { params });
  }
}
