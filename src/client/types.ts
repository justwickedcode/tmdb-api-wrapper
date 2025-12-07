interface NextFetchRequestConfig {
  revalidate?: number | false;
  tags?: string[];
  cache?: RequestCache;
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
}

export type CustomRequestInit = RequestInit & {
  next?: NextFetchRequestConfig['next'];
  cache?: NextFetchRequestConfig['cache'];
  revalidate?: NextFetchRequestConfig['revalidate'];
  tags?: NextFetchRequestConfig['tags'];
};

export type * from './__generated__/api/tmdbApi';

