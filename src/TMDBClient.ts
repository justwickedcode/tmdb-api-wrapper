import {
  AccountEndpoints,
  AuthenticationEndpoints,
  Certifications,
  Collections,
  Companies,
  Configuration,
  Credits,
  Discover,
  Find,
  Genres,
  Keywords,
  Movies,
  Networks,
  People,
  PeopleLists,
  Reviews,
  Search,
  Trending,
  TVEpisodeGroups,
  TVEpisodes,
  TVSeasons,
  TVSeries,
  TVSeriesLists,
  WatchProviders,
} from './sections';
import HTTPClient, { RequestOptions } from './HTTPClient';

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
    return new Certifications(this.http);
  }
  get collections() {
    return new Collections(this.http);
  }
  get companies() {
    return new Companies(this.http);
  }
  get configuration() {
    return new Configuration(this.http);
  }
  get credits() {
    return new Credits(this.http);
  }
  get discover() {
    return new Discover(this.http);
  }
  get find() {
    return new Find(this.http);
  }
  get genres() {
    return new Genres(this.http);
  }
  get keywords() {
    return new Keywords(this.http);
  }
  get movies() {
    return new Movies(this.http);
  }
  get networks() {
    return new Networks(this.http);
  }
  get people() {
    return new People(this.http);
  }
  get peopleLists() {
    return new PeopleLists(this.http);
  }
  get reviews() {
    return new Reviews(this.http);
  }
  get search() {
    return new Search(this.http);
  }
  get trending() {
    return new Trending(this.http);
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
    return new WatchProviders(this.http);
  }
}
