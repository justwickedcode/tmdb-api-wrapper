import {Account} from "./sections/endpoints/account/Account";
import {Authentication} from "./sections/endpoints/authentication/Authentication";
import {Certifications} from "./sections/endpoints/certifications/Certifications";
import {Collections} from "./sections/endpoints/collections/Collections";
import {Companies} from "./sections/endpoints/companies/Companies";
import {Configuration} from "./sections/endpoints/configuration/Configuration";
import {Credits} from "./sections/endpoints/credits/Credits";
import {Discover} from "./sections/endpoints/discover/Discover";
import {Find} from "./sections/endpoints/find/Find";
import {Genres} from "./sections/endpoints/genres/Genres";
import {Keywords} from "./sections/endpoints/keywords/Keywords";
import {Movies} from "./sections/endpoints/movie/Movies";
import {Networks} from "./sections/endpoints/networks/Networks";
import {People} from "./sections/endpoints/people/People";
import {PeopleLists} from "./sections/endpoints/lists/PeopleLists";
import {Reviews} from "./sections/endpoints/reviews/Reviews";
import {Search} from "./sections/endpoints/search/Search";
import {Trending} from "./sections/endpoints/lists/Trending";
import {TVEpisodeGroups} from "./sections/endpoints/tv/TVEpisodeGroups";
import {TVEpisodes} from "./sections/endpoints/tv/TVEpisodes";
import {TVSeasons} from "./sections/endpoints/tv/TVSeasons";
import {TVSeries} from "./sections/endpoints/tv/TVSeries";
import {TVSeriesLists} from "./sections/endpoints/lists/TVSeriesLists";
import {WatchProviders} from "./sections/endpoints/watch-providers/WatchProviders";

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
