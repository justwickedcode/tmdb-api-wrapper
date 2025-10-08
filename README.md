# TMDB Client Module

A simple TypeScript client for **The Movie Database (TMDB) API** (v3).  
It allows you to easily fetch movies, TV shows, lists, and related data using a single `TMDBClient` instance with full TypeScript types.

---

## Features

- Easy access to TMDB endpoints through `TMDBClient`
- Fully typed API responses
- Supports query parameters, headers, and authentication
- Works with Next.js caching (`RequestOptions.next`)
- Simple and modular structure for extension

---

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
