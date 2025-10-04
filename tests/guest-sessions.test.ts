import { TMDBClient } from '../src/TMDBClient';
import {
  GuestSessionRatedMoviesOptions,
  GuestSessionRatedTVShowsOptions,
  GuestSessionRatedTVEpisodesOptions,
} from '../src/sections/guest-sessions/types';

// TODO: Figure out how this works and fix the tests
describe.skip('Guest Sessions API integration via TMDBClient', () => {
  const accessToken = process.env.TMDB_API_KEY!;
  let tmdb: TMDBClient;
  let guestSessionId: string;

  beforeAll(async () => {
    tmdb = new TMDBClient(accessToken);

    // Create a new guest session
    const guestSession = await tmdb.authentication.createGuestSession();
    console.log(guestSession);
    if (!guestSession?.guest_session_id) {
      throw new Error('Failed to create guest session');
    }
    guestSessionId = guestSession.guest_session_id;
    console.log('Created guest session:', guestSessionId);
  });

  it.skip('should fetch rated movies (empty initially)', async () => {
    const options: GuestSessionRatedMoviesOptions = {
      language: 'en-US',
      sort_by: 'created_at.asc',
    };
    const res = await tmdb.guestSessions.getRatedMovies(guestSessionId, options);

    expect(res).toHaveProperty('results');
    expect(Array.isArray(res.results)).toBe(true);
    console.log('Rated movies response:', res.results);
  });

  it.skip('should fetch rated TV shows (empty initially)', async () => {
    const options: GuestSessionRatedTVShowsOptions = {
      language: 'en-US',
      sort_by: 'created_at.asc',
    };
    const res = await tmdb.guestSessions.getRatedTVShows(guestSessionId, options);

    expect(res).toHaveProperty('results');
    expect(Array.isArray(res.results)).toBe(true);
    console.log('Rated TV shows response:', res.results);
  });

  it.skip('should fetch rated TV episodes (empty initially)', async () => {
    const options: GuestSessionRatedTVEpisodesOptions = {
      language: 'en-US',
      sort_by: 'created_at.asc',
    };
    const res = await tmdb.guestSessions.getRatedTVEpisodes(guestSessionId, options);

    expect(res).toHaveProperty('results');
    expect(Array.isArray(res.results)).toBe(true);
    console.log('Rated TV episodes response:', res.results);
  });
});
