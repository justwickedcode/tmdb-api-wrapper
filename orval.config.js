import { defineConfig } from 'orval';

export default defineConfig({
  'tmdb-api': {
    input: './oas/tmdb-api.yaml',
    output: {
      mode: 'tags-split',
      target: './src/client/__generated__/api',
      schemas: './src/client/__generated__/schema',
      indexFiles: true,
      client: 'fetch',
      baseUrl: 'https://api.themoviedb.org/3',
      prettier: true,
      usePrefetch: true,
      urlEncodeParameters: true,
      override: {
        useDeprecatedOperations: false,
        useTypeOverInterface: true,
        fetch: {
          includeHttpResponseReturnType: false,
        },
      },
    },
  },
});
