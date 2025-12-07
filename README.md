# TMDB Client Module

A simple TypeScript client for [The Movie Database API](https://developer.themoviedb.org/reference/getting-started)

---

### Basic Usage

```ts
import 'server-only';
import { TmdbClient } from '@justwicked/tmdb-client';

const tmdbApi = new TmdbClient({
  next: {
    revalidate: 3600,
    tags: ['tmdb']
  },
  cache: 'force-cache',
  headers: {
    Authorization: `Bearer ${process.env.AUTH_TOKEN!}`
  }
});

export default tmdbApi;
```

```ts
import tmdbApi from './tmdbApi';

async function getTrending() {
  const trending = await tmdbApi.trending.getAll();
  console.log(trending);
}

getTrending();
```

### Caution
- Avoid relying on this client, as it is intended for self use.
