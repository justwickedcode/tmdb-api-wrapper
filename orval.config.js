import { defineConfig } from 'orval';

export default defineConfig({
  'tmdb-api': {
    input: './oas/tmdb-api.yaml',
    output: {
      mode: 'single',
      target: './src/client/__generated__/api',
      client: 'fetch',
      baseUrl: 'https://api.themoviedb.org',
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
