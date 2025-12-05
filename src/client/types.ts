interface NextFetchRequestConfig {
  revalidate?: number | false;
  tags?: string[];
  cache?: 'force-cache' | 'no-store' | 'no-cache' | 'only-if-cached';
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

export * from './__generated__/schema';
