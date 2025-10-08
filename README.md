# TMDB Client Module

A simple **TypeScript client** for **The Movie Database (TMDB) API (v3)**.  
It provides easy access to movies, TV shows, lists, genres, and related data via a single `TMDBClient` instance with full TypeScript typings.

---

## Features

- Simple and modular interface for TMDB endpoints
- Fully typed responses for TypeScript support
- Works seamlessly with Next.js caching (`RequestOptions.next`)
- Easily extendable for custom TMDB endpoints

---

### Basic Usage

```ts
import { TmdbClient } from 'your-tmdb-client/src/tmdb-client';

const accessToken = process.env.TMDB_API_KEY!;
const tmdb = new TmdbClient(accessToken);

async function run() {
  // Fetch movie genres
  const movieGenres = await tmdb.genres.getMovieGenres();
  console.log('Movie genre sample:', movieGenres.genres[0]);

  // Fetch TV genres
  const tvGenres = await tmdb.genres.getTVGenres();
  console.log('TV genre sample:', tvGenres.genres[0]);

  // Fetch movie genres in French
  const frenchGenres = await tmdb.genres.getMovieGenres('fr-FR');
  console.log('French movie genre sample:', frenchGenres.genres[0].name);

  // Fetch TV genres in Spanish
  const spanishGenres = await tmdb.genres.getTVGenres('es-ES');
  console.log('Spanish TV genre sample:', spanishGenres.genres[0].name);
}

run();
```

### Next.js Server-side Integration

```ts
import 'server-only';
import { TmdbClient } from '@justwicked/tmdb-api-wrapper';

export const tmdb = new TmdbClient(process.env.NEXT_API_KEY!, {
  next: {
    cache: 'force-cache',
    revalidate: 3600,
    tags: ['tmdb'],
  },
});
```

### Caution

- Some parts of this client may need further testing.
- Avoid relying on this client in production for mission-critical features.
