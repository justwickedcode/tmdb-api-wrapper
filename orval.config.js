import { defineConfig } from 'orval';

export default defineConfig({
  'tmdb-api': {
    input: './oas/tmdb-api.yaml',
    output: {
      mode: 'tags-split',
      target: './src/services/__generated__',
      schemas: './src/services/__generated__/schema',
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
        responses: {
          suffix: ''
        }
      }
    },
  },
});
