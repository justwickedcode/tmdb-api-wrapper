import { TMDBClient } from '../../src/TMDBClient';
import { CreditDetails } from '../../src/sections/credits/types';

describe('Credits API integration', () => {
  const accessToken = process.env.TMDB_API_KEY!;
  let tmdb: TMDBClient;

  // Replace this with a valid TMDBClient credit ID for testing
  const testCreditId = '52fe420dc3a36847f800024f';

  beforeAll(() => {
    tmdb = new TMDBClient(accessToken);
  });

  it('should fetch credit details by ID', async () => {
    const res: CreditDetails = await tmdb.credits.getDetails(testCreditId);

    expect(res).toHaveProperty('credit_type');
    expect(res).toHaveProperty('department');
    expect(res).toHaveProperty('media');
    expect(res).toHaveProperty('person');

    // Media checks
    expect(res.media).toHaveProperty('id');
    expect(res.media).toHaveProperty('media_type');

    // Person checks
    expect(res.person).toHaveProperty('id');
    expect(res.person).toHaveProperty('name');

    console.log('Credit details response:', res);
  });

  it('should include episodes and seasons if media type is TV', async () => {
    const res: CreditDetails = await tmdb.credits.getDetails(testCreditId);

    if (res.media.media_type === 'tv') {
      expect(res.media.episodes).toBeDefined();
      expect(res.media.seasons).toBeDefined();
      if (res.media.episodes && res.media.episodes.length > 0) {
        expect(res.media.episodes[0]).toHaveProperty('episode_count');
        expect(res.media.episodes[0]).toHaveProperty('season_number');
      }
      if (res.media.seasons && res.media.seasons.length > 0) {
        expect(res.media.seasons[0]).toHaveProperty('season_number');
      }
    }
  });

  it('should include character if credit is a cast', async () => {
    const res: CreditDetails = await tmdb.credits.getDetails(testCreditId);
    if (res.media.character) {
      expect(typeof res.media.character).toBe('string');
    }
  });
});
