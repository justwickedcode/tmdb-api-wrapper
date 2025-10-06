import {
  AccountEndpoints,
  AuthenticationEndpoints,
  CertificationsEndpoints,
  ChangesEndpoints,
  CollectionsEndpoints,
  CompaniesEndpoints,
  ConfigurationEndpoints,
  CreditsEndpoints,
  DiscoverEndpoints,
  FindEndpoints,
  GenresEndpoints,
  GuestSessionsEndpoints,
  KeywordsEndpoints,
  ListsEndpoints,
  MoviesEndpoints,
  NetworksEndpoints,
  PeopleEndpoints,
  PeopleListsEndpoints,
  ReviewsEndpoints,
  SearchEndpoints,
  TrendingEndpoints,
  TvEpisodeGroupsEndpoints,
  TvEpisodesEndpoints,
  TvSeasonsEndpoints,
  TvSeriesEndpoints,
  TvSeriesListsEndpoints,
  WatchProvidersEndpoints,
} from './sections';
import HttpConnector, { RequestOptions } from './http-connector';

const BASE_URL = 'https://api.themoviedb.org/3/';
/*
 * TmdbClient Wrapper
 *
 * */
export class TmdbClient {
  private readonly http: HttpConnector;

  constructor(accessToken: string, httpOptions?: Partial<RequestOptions>) {
    this.http = new HttpConnector(BASE_URL, accessToken, httpOptions);
  }

  get certifications() {
    return new CertificationsEndpoints(this.http);
  }
  get changes() {
    return new ChangesEndpoints(this.http);
  }
  get collections() {
    return new CollectionsEndpoints(this.http);
  }
  get companies() {
    return new CompaniesEndpoints(this.http);
  }
  get configuration() {
    return new ConfigurationEndpoints(this.http);
  }
  get credits() {
    return new CreditsEndpoints(this.http);
  }
  get discover() {
    return new DiscoverEndpoints(this.http);
  }
  get find() {
    return new FindEndpoints(this.http);
  }
  get genres() {
    return new GenresEndpoints(this.http);
  }
  get keywords() {
    return new KeywordsEndpoints(this.http);
  }
  get lists() {
    return new ListsEndpoints(this.http);
  }
  get movies() {
    return new MoviesEndpoints(this.http);
  }
  get networks() {
    return new NetworksEndpoints(this.http);
  }
  get people() {
    return new PeopleEndpoints(this.http);
  }
  get reviews() {
    return new ReviewsEndpoints(this.http);
  }
  get search() {
    return new SearchEndpoints(this.http);
  }
  get trending() {
    return new TrendingEndpoints(this.http);
  }
  get tvSeries() {
    return new TvSeriesEndpoints(this.http);
  }
  get watchProviders() {
    return new WatchProvidersEndpoints(this.http);
  }
}
