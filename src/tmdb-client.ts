import { CustomRequestInit } from "./client/types";

import AccountService from "./client/services/account/account-service";
import AuthenticationService from "./client/services/authentication/authentication-service";
import CertificationService from "./client/services/certification/certification-service";
import CollectionService from "./client/services/collection/collection-service";
import CompanyService from "./client/services/company/company-service";
import ConfigurationService from "./client/services/configuration/configuration-service";
import CreditService from "./client/services/credit/credit-service";
import DiscoverService from "./client/services/dicover/discover-service";
import FindService from "./client/services/find/find-service";
import GenreService from "./client/services/genre/genre-service";
import GuestSessionService from "./client/services/guest-session/guest-session-service";
import KeywordService from "./client/services/keyword/keyword-service";
import ListService from "./client/services/list/list-service";
import MovieService from "./client/services/movie/movie-service";
import NetworkService from "./client/services/network/network-service";
import PersonService from "./client/services/person/person-service";
import ReviewService from "./client/services/review/review-service";
import SearchService from "./client/services/search/search-service";
import TrendingService from "./client/services/trending/trending-service";
import TVService from "./client/services/tv/tv-service";
import WatchService from "./client/services/watch/watch-service";

export class TmdbClient {
  public account: AccountService;
  public authentication: AuthenticationService;
  public certification: CertificationService;
  public collection: CollectionService;
  public company: CompanyService;
  public configuration: ConfigurationService;
  public credit: CreditService;
  public discover: DiscoverService;
  public find: FindService;
  public genre: GenreService;
  public guestSession: GuestSessionService;
  public keyword: KeywordService;
  public list: ListService;
  public movie: MovieService;
  public network: NetworkService;
  public person: PersonService;
  public review: ReviewService;
  public search: SearchService;
  public trending: TrendingService;
  public tv: TVService;
  public watch: WatchService;

  constructor(public readonly defaultOptions: CustomRequestInit) {
    this.account = new AccountService(defaultOptions);
    this.authentication = new AuthenticationService(defaultOptions);
    this.certification = new CertificationService(defaultOptions);
    this.collection = new CollectionService(defaultOptions);
    this.company = new CompanyService(defaultOptions);
    this.configuration = new ConfigurationService(defaultOptions);
    this.credit = new CreditService(defaultOptions);
    this.discover = new DiscoverService(defaultOptions);
    this.find = new FindService(defaultOptions);
    this.genre = new GenreService(defaultOptions);
    this.guestSession = new GuestSessionService(defaultOptions);
    this.keyword = new KeywordService(defaultOptions);
    this.list = new ListService(defaultOptions);
    this.movie = new MovieService(defaultOptions);
    this.network = new NetworkService(defaultOptions);
    this.person = new PersonService(defaultOptions);
    this.review = new ReviewService(defaultOptions);
    this.search = new SearchService(defaultOptions);
    this.trending = new TrendingService(defaultOptions);
    this.tv = new TVService(defaultOptions);
    this.watch = new WatchService(defaultOptions);
  }
}
