import {
    Account,
    Authentication,
    Certifications,
    Collections,
    Companies,
    Configuration,
    Credits,
    Discover, Find, Genres, Keywords, Movies, Networks, People, PeopleLists, Reviews, Search, Trending, TVEpisodeGroups,
    TVEpisodes, TVSeasons, TVSeries, TVSeriesLists, WatchProviders
} from "./endpoints";

/*
 * TMDB Wrapper
 *
 * */
class TMDBClient {
  private readonly accessToken: string;
  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }
  get account() {
    return new Account(this.accessToken);
  }
  get authentication() {
    return new Authentication(this.accessToken);
  }
  get certifications() {
    return new Certifications(this.accessToken);
  }
  get collections() {
    return new Collections(this.accessToken);
  }
  get companies() {
    return new Companies(this.accessToken);
  }
  get configuration() {
    return new Configuration(this.accessToken);
  }
  get credits() {
    return new Credits(this.accessToken);
  }
  get discover() {
    return new Discover(this.accessToken);
  }
  get find() {
    return new Find(this.accessToken);
  }
  get genres() {
    return new Genres(this.accessToken);
  }
  get keywords() {
    return new Keywords(this.accessToken);
  }
  get movies() {
    return new Movies(this.accessToken);
  }
  get networks() {
    return new Networks(this.accessToken);
  }
  get people() {
    return new People(this.accessToken);
  }
  get peopleLists() {
    return new PeopleLists(this.accessToken);
  }
  get reviews() {
    return new Reviews(this.accessToken);
  }
  get search() {
    return new Search(this.accessToken);
  }
  get trending() {
    return new Trending(this.accessToken);
  }
  get tvEpisodeGroups() {
    return new TVEpisodeGroups(this.accessToken);
  }
  get tvEpisodes() {
    return new TVEpisodes(this.accessToken);
  }
  get tvSeasons() {
    return new TVSeasons(this.accessToken);
  }
  get tvSeries() {
    return new TVSeries(this.accessToken);
  }
  get tvSeriesLists() {
    return new TVSeriesLists(this.accessToken);
  }
  get watchProviders() {
    return new WatchProviders(this.accessToken);
  }
}
