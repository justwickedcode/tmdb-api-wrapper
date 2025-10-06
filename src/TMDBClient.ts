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
  MoviesEndpoints,
  NetworksEndpoints,
  PeopleEndpoints,
  ReviewsEndpoints,
  SearchEndpoints,
  TVEpisodeGroups,
  TVEpisodes,
  TVSeasons,
  TVSeries,
  WatchProvidersEndpoints,
} from './sections';
import HTTPClient, { RequestOptions } from './HTTPClient';
import { TrendingEndpoints } from './sections/trending/trending-endpoints';
import { PeopleListsEndpoints } from './sections/people/people-lists-endpoints';
import { TVSeriesLists } from './sections/tv/TVSeriesLists';
import { ListsEndpoints } from './sections/lists/lists-endpoints';

/*
 * TMDB Wrapper
 *
 * */
const BASE_URL = 'https://api.themoviedb.org/3/';
export class TMDBClient {
  private readonly http: HTTPClient;

  constructor(accessToken: string, httpOptions?: Partial<RequestOptions>) {
    this.http = new HTTPClient(BASE_URL, accessToken, httpOptions);
  }
  get account() {
    return new AccountEndpoints(this.http);
  }
  get authentication() {
    return new AuthenticationEndpoints(this.http);
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
  get guestSessions() {
    return new GuestSessionsEndpoints(this.http);
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
  get peopleLists() {
    return new PeopleListsEndpoints(this.http);
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
  get tvEpisodeGroups() {
    return new TVEpisodeGroups(this.http);
  }
  get tvEpisodes() {
    return new TVEpisodes(this.http);
  }
  get tvSeasons() {
    return new TVSeasons(this.http);
  }
  get tvSeries() {
    return new TVSeries(this.http);
  }
  get tvSeriesLists() {
    return new TVSeriesLists(this.http);
  }
  get watchProviders() {
    return new WatchProvidersEndpoints(this.http);
  }
}
