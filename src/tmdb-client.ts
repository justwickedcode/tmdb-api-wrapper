interface NextFetchRequestConfig {
  revalidate?: number | false;
  tags?: string[];
  cache?: 'force-cache' | 'no-store' | 'no-cache' | 'only-if-cached';
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
}

type CustomRequestInit = RequestInit & {
  next?: NextFetchRequestConfig['next'];
  cache?: NextFetchRequestConfig['cache'];
  revalidate?: NextFetchRequestConfig['revalidate'];
  tags?: NextFetchRequestConfig['tags'];
};

/*
 * TmdbClient Wrapper
 *
 * */
export class TmdbClient {
  private readonly defaultOptions: CustomRequestInit;

  constructor(accessToken: string) {
    this.defaultOptions = {
      next: {
        revalidate: 3600,
        tags: ['tmdb']
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
  }
}
