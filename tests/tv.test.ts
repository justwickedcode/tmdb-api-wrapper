import { TMDBClient } from '../src/TMDBClient';

describe('TV Series Sub-endpoints', () => {
  const accessToken = process.env.TMDB_API_KEY!;
  const sessionId = process.env.TMDB_SESSION_ID!;
  const tvId = 1399; // Example: Game of Thrones
  const seasonNumber = 1;
  const episodeNumber = 1;
  const episodeGroupId = '5ae0275b0e0a26156c00de9f';

  let tmdb: TMDBClient;

  beforeAll(() => {
    tmdb = new TMDBClient(accessToken);
  });

  // ---- TV Lists ----
  it('should fetch airing today TV series', async () => {
    const airing = await tmdb.tvSeries.lists.getAiringToday();
    expect(airing).toHaveProperty('results');
    console.log('Airing today:', airing);
  });

  it('should fetch on the air TV series', async () => {
    const onAir = await tmdb.tvSeries.lists.getOnTheAir();
    expect(onAir).toHaveProperty('results');
    console.log('On the air:', onAir);
  });

  it('should fetch popular TV series', async () => {
    const popular = await tmdb.tvSeries.lists.getPopular();
    expect(popular).toHaveProperty('results');
    console.log('Popular:', popular);
  });

  it('should fetch top rated TV series', async () => {
    const topRated = await tmdb.tvSeries.lists.getTopRated();
    expect(topRated).toHaveProperty('results');
    console.log('Top rated:', topRated);
  });

  // ---- TV Seasons ----
  it('should fetch season details', async () => {
    const season = await tmdb.tvSeries.seasons.getDetails(tvId, seasonNumber);
    expect(season).toHaveProperty('id');
    console.log('Season details:', season);
  });

  it('should fetch season account states', async () => {
    const account = await tmdb.tvSeries.seasons.getAccountStates(tvId, seasonNumber, {
      session_id: sessionId,
    });
    expect(account).toHaveProperty('id');
    console.log('Season account states:', account);
  });

  it('should fetch season aggregate credits', async () => {
    const credits = await tmdb.tvSeries.seasons.getAggregatedCredits(tvId, seasonNumber);
    expect(credits).toHaveProperty('id');
    console.log('Season aggregate credits:', credits);
  });

  it('should fetch season changes', async () => {
    const changes = await tmdb.tvSeries.seasons.getChanges(seasonNumber);
    expect(changes).toHaveProperty('changes');
    console.log('Season changes:', changes);
  });

  it('should fetch season credits', async () => {
    const credits = await tmdb.tvSeries.seasons.getCredits(tvId, seasonNumber);
    expect(credits).toHaveProperty('id');
    console.log('Season credits:', credits);
  });

  it('should fetch season external IDs', async () => {
    const extIds = await tmdb.tvSeries.seasons.getExternalIds(tvId, seasonNumber);
    expect(extIds).toHaveProperty('id');
    console.log('Season external IDs:', extIds);
  });

  it('should fetch season images', async () => {
    const images = await tmdb.tvSeries.seasons.getImages(tvId, seasonNumber);
    expect(images).toHaveProperty('id');
    console.log('Season images:', images);
  });

  it('should fetch season translations', async () => {
    const translations = await tmdb.tvSeries.seasons.getTranslations(tvId, seasonNumber);
    expect(translations).toHaveProperty('id');
    console.log('Season translations:', translations);
  });

  it('should fetch season videos', async () => {
    const videos = await tmdb.tvSeries.seasons.getVideos(tvId, seasonNumber);
    expect(videos).toHaveProperty('id');
    console.log('Season videos:', videos);
  });

  it('should fetch season watch providers', async () => {
    const providers = await tmdb.tvSeries.seasons.getWatchProviders(tvId, seasonNumber);
    expect(providers).toHaveProperty('id');
    console.log('Season watch providers:', providers);
  });

  // ---- TV Episodes ----
  it('should fetch episode details', async () => {
    const episode = await tmdb.tvSeries.episodes.getDetails(tvId, seasonNumber, episodeNumber);
    expect(episode).toHaveProperty('id');
    console.log('Episode details:', episode);
  });

  it('should fetch episode account states', async () => {
    const account = await tmdb.tvSeries.episodes.getAccountStates(
      tvId,
      seasonNumber,
      episodeNumber,
      { session_id: sessionId },
    );
    expect(account).toHaveProperty('id');
    console.log('Episode account states:', account);
  });

  it('should fetch episode changes', async () => {
    const changes = await tmdb.tvSeries.episodes.getChanges(tvId, seasonNumber, episodeNumber);
    expect(changes).toHaveProperty('changes');
    console.log('Episode changes:', changes);
  });

  it('should fetch episode credits', async () => {
    const credits = await tmdb.tvSeries.episodes.getCredits(tvId, seasonNumber, episodeNumber);
    expect(credits).toHaveProperty('id');
    console.log('Episode credits:', credits);
  });

  it('should fetch episode external IDs', async () => {
    const extIds = await tmdb.tvSeries.episodes.getExternalIds(tvId, seasonNumber, episodeNumber);
    expect(extIds).toHaveProperty('id');
    console.log('Episode external IDs:', extIds);
  });

  it('should fetch episode images', async () => {
    const images = await tmdb.tvSeries.episodes.getImages(tvId, seasonNumber, episodeNumber);
    expect(images).toHaveProperty('id');
    console.log('Episode images:', images);
  });

  it('should fetch episode translations', async () => {
    const translations = await tmdb.tvSeries.episodes.getTranslations(
      tvId,
      seasonNumber,
      episodeNumber,
    );
    expect(translations).toHaveProperty('id');
    console.log('Episode translations:', translations);
  });

  it('should fetch episode videos', async () => {
    const videos = await tmdb.tvSeries.episodes.getVideos(tvId, seasonNumber, episodeNumber);
    expect(videos).toHaveProperty('id');
    console.log('Episode videos:', videos);
  });

  it('should add and delete episode rating', async () => {
    if (sessionId) {
      const add = await tmdb.tvSeries.episodes.addRating(
        tvId,
        seasonNumber,
        episodeNumber,
        { value: 9 },
        { session_id: sessionId },
      );
      expect(add).toHaveProperty('status_code');
      console.log('Episode add rating:', add);

      const del = await tmdb.tvSeries.episodes.deleteRating(tvId, seasonNumber, episodeNumber, {
        session_id: sessionId,
      });
      expect(del).toHaveProperty('status_code');
      console.log('Episode delete rating:', del);
    }
  });

  // ---- TV Episode Groups ----
  it('should fetch episode group details', async () => {
    const group = await tmdb.tvSeries.episodeGroups.getDetails(episodeGroupId);
    expect(group).toHaveProperty('id', episodeGroupId);
    console.log('Episode group details:', group);
  });
});
