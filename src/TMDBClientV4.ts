import { AccountEndpoints, AuthEndpoints, ListsEndpoints } from './sections/v4';
import HTTPClient, { RequestOptions } from './HTTPClient';

const BASE_URL = 'https://api.themoviedb.org/4/';
/*
 * TMDBClientV4 Wrapper
 *
 * */
export class TMDBClientV4 {
  private readonly http: HTTPClient;

  constructor(accessToken: string, httpOptions?: Partial<RequestOptions>) {
    this.http = new HTTPClient(BASE_URL, accessToken, httpOptions);
  }
  get account() {
    return new AccountEndpoints(this.http);
  }
  get auth() {
    return new AuthEndpoints(this.http);
  }

  get lists() {
    return new ListsEndpoints(this.http);
  }
}
