import { CustomRequestInit } from './types';

import AccountService from './services/account/account-service';
import AuthenticationService from './services/authentication/authentication-service';
import CertificationService from './services/certification/certification-service';
import CollectionService from './services/collection/collection-service';
import CompanyService from './services/company/company-service';
import ConfigurationService from './services/configuration/configuration-service';
import CreditService from './services/credit/credit-service';
import DiscoverService from './services/dicover/discover-service';
import FindService from './services/find/find-service';
import GenreService from './services/genre/genre-service';
import GuestSessionService from './services/guest-session/guest-session-service';
import KeywordService from './services/keyword/keyword-service';
import ListService from './services/list/list-service';
import MovieService from './services/movie/movie-service';
import NetworkService from './services/network/network-service';
import PersonService from './services/person/person-service';
import ReviewService from './services/review/review-service';
import SearchService from './services/search/search-service';
import TrendingService from './services/trending/trending-service';
import TVService from './services/tv/tv-service';
import WatchService from './services/watch/watch-service';

export class TmdbClient {
  public account: AccountService;
  public authentication: AuthenticationService;
  public certifications: CertificationService;
  public collections: CollectionService;
  public companies: CompanyService;
  public configurations: ConfigurationService;
  public credits: CreditService;
  public discover: DiscoverService;
  public find: FindService;
  public genres: GenreService;
  public guestSessions: GuestSessionService;
  public keywords: KeywordService;
  public lists: ListService;
  public movies: MovieService;
  public networks: NetworkService;
  public persons: PersonService;
  public reviews: ReviewService;
  public search: SearchService;
  public trending: TrendingService;
  public tvShows: TVService;
  public watch: WatchService;

  constructor(public readonly defaultOptions: CustomRequestInit) {
    this.account = new AccountService(defaultOptions);
    this.authentication = new AuthenticationService(defaultOptions);
    this.certifications = new CertificationService(defaultOptions);
    this.collections = new CollectionService(defaultOptions);
    this.companies = new CompanyService(defaultOptions);
    this.configurations = new ConfigurationService(defaultOptions);
    this.credits = new CreditService(defaultOptions);
    this.discover = new DiscoverService(defaultOptions);
    this.find = new FindService(defaultOptions);
    this.genres = new GenreService(defaultOptions);
    this.guestSessions = new GuestSessionService(defaultOptions);
    this.keywords = new KeywordService(defaultOptions);
    this.lists = new ListService(defaultOptions);
    this.movies = new MovieService(defaultOptions);
    this.networks = new NetworkService(defaultOptions);
    this.persons = new PersonService(defaultOptions);
    this.reviews = new ReviewService(defaultOptions);
    this.search = new SearchService(defaultOptions);
    this.trending = new TrendingService(defaultOptions);
    this.tvShows = new TVService(defaultOptions);
    this.watch = new WatchService(defaultOptions);
  }
}
