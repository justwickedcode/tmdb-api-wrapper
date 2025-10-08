import { TmdbClient } from '../../src/tmdb-client';

describe('TV Series Sub-endpoints', () => {
  const accessToken = process.env.TMDB_API_KEY!;
  const sessionId = process.env.TMDB_SESSION_ID!;
  const tvId = 1399; // Game of Thrones
  const seasonNumber = 1;
  const episodeNumber = 1;
  const episodeGroupId = '5ae0275b0e0a26156c00de9f';

  let tmdb: TmdbClient;

  beforeAll(() => {
    tmdb = new TmdbClient(accessToken);
  });

  /* ------------------ TV LISTS ------------------ */
  it('fetches airing today', async () => {
    const res = await tmdb.tvSeries.lists.getAiringToday();
    expect(res.results).toBeDefined();
    console.log(
      'Airing today:',
      res.results.map((t) => t.name),
    );
  });

  it('fetches on the air', async () => {
    const res = await tmdb.tvSeries.lists.getOnTheAir();
    expect(res.results).toBeDefined();
    console.log(
      'On the air:',
      res.results.map((t) => t.name),
    );
  });

  it('fetches popular TV series', async () => {
    const res = await tmdb.tvSeries.lists.getPopular();
    expect(res.results).toBeDefined();
    console.log(
      'Popular:',
      res.results.map((t) => t.name),
    );
  });

  it('fetches top rated TV series', async () => {
    const res = await tmdb.tvSeries.lists.getTopRated();
    expect(res.results).toBeDefined();
    console.log(
      'Top rated:',
      res.results.map((t) => t.name),
    );
  });

  /* ------------------ TV SERIES DETAILS ------------------ */
  it('fetches TV series details', async () => {
    const details = await tmdb.tvSeries.getDetails(tvId);
    expect(details.id).toBe(tvId);
    console.log('Series details:', details.name);
  });

  it('fetches watch providers for a series', async () => {
    const providers = await tmdb.tvSeries.getWatchProviders(tvId);
    expect(providers.results).toBeDefined();
    console.log('Watch providers:', Object.keys(providers.results));
  });

  /* ------------------ TV SEASONS ------------------ */
  it('fetches season details', async () => {
    const season = await tmdb.tvSeries.seasons.getDetails(tvId, seasonNumber);
    expect(season.id).toBeDefined();
    console.log('Season details:', season.name);
  });

  it('fetches season account states', async () => {
    const account = await tmdb.tvSeries.seasons.getAccountStates(tvId, seasonNumber, {
      session_id: sessionId,
    });
    expect(account.id).toBeDefined();
    console.log('Season account states:', account.favorite);
  });

  it('fetches season aggregated credits', async () => {
    const credits = await tmdb.tvSeries.seasons.getAggregatedCredits(tvId, seasonNumber);
    expect(credits.id).toBeDefined();
    console.log('Season aggregate credits:', credits.cast.length);
  });

  it('fetches season credits', async () => {
    const credits = await tmdb.tvSeries.seasons.getCredits(tvId, seasonNumber);
    expect(credits.id).toBeDefined();
    console.log('Season credits:', credits.cast.length);
  });

  it('fetches season external IDs', async () => {
    const extIds = await tmdb.tvSeries.seasons.getExternalIds(tvId, seasonNumber);
    expect(extIds.id).toBeDefined();
    console.log('Season external IDs:', extIds.imdb_id);
  });

  it('fetches season images', async () => {
    const images = await tmdb.tvSeries.seasons.getImages(tvId, seasonNumber);
    expect(images.id).toBeDefined();
    console.log('Season images:', images.posters?.length);
  });

  it('fetches season translations', async () => {
    const translations = await tmdb.tvSeries.seasons.getTranslations(tvId, seasonNumber);
    expect(translations.id).toBeDefined();
    console.log(
      'Season translations:',
      translations.translations.map((t) => t.iso_639_1),
    );
  });

  it('fetches season videos', async () => {
    const videos = await tmdb.tvSeries.seasons.getVideos(tvId, seasonNumber);
    expect(videos.results).toBeDefined();
    console.log('Season videos:', videos.results.length);
  });

  it('fetches season watch providers', async () => {
    const providers = await tmdb.tvSeries.seasons.getWatchProviders(tvId, seasonNumber);
    expect(providers.results).toBeDefined();
    console.log('Season watch providers:', Object.keys(providers.results));
  });

  /* ------------------ TV EPISODES ------------------ */
  it('fetches episode details', async () => {
    const episode = await tmdb.tvSeries.episodes.getDetails(tvId, seasonNumber, episodeNumber);
    expect(episode.id).toBeDefined();
    console.log('Episode details:', episode.name);
  });

  it('fetches episode account states', async () => {
    const account = await tmdb.tvSeries.episodes.getAccountStates(
      tvId,
      seasonNumber,
      episodeNumber,
      { session_id: sessionId },
    );
    expect(account.id).toBeDefined();
    console.log('Episode account states:', account.favorite);
  });

  it('fetches episode credits', async () => {
    const credits = await tmdb.tvSeries.episodes.getCredits(tvId, seasonNumber, episodeNumber);
    expect(credits.id).toBeDefined();
    console.log('Episode credits:', credits.cast.length);
  });

  it('fetches episode external IDs', async () => {
    const extIds = await tmdb.tvSeries.episodes.getExternalIds(tvId, seasonNumber, episodeNumber);
    expect(extIds.id).toBeDefined();
    console.log('Episode external IDs:', extIds.imdb_id);
  });

  it('fetches episode images', async () => {
    const images = await tmdb.tvSeries.episodes.getImages(tvId, seasonNumber, episodeNumber);
    expect(images.id).toBeDefined();
    console.log('Episode images:', images.stills?.length);
  });

  it('fetches episode translations', async () => {
    const translations = await tmdb.tvSeries.episodes.getTranslations(
      tvId,
      seasonNumber,
      episodeNumber,
    );
    expect(translations.id).toBeDefined();
    console.log(
      'Episode translations:',
      translations.translations.map((t) => t.iso_639_1),
    );
  });

  it('fetches episode videos', async () => {
    const videos = await tmdb.tvSeries.episodes.getVideos(tvId, seasonNumber, episodeNumber);
    expect(videos.results).toBeDefined();
    console.log('Episode videos:', videos.results.length);
  });

  it('adds and deletes episode rating', async () => {
    const add = await tmdb.tvSeries.episodes.addRating(
      tvId,
      seasonNumber,
      episodeNumber,
      { value: 9 },
      { session_id: sessionId },
    );
    expect(add.status_code).toBeDefined();
    const del = await tmdb.tvSeries.episodes.deleteRating(tvId, seasonNumber, episodeNumber, {
      session_id: sessionId,
    });
    expect(del.status_code).toBeDefined();
  });

  /* ------------------ TV EPISODE GROUPS ------------------ */
  it('fetches episode group details', async () => {
    const group = await tmdb.tvSeries.episodeGroups.getDetails(episodeGroupId);
    expect(group.id).toBe(episodeGroupId);
    console.log('Episode group details:', group.name);
  });
});
