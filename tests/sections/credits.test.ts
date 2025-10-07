import { TmdbClient } from '../../src/tmdb-client';
import { CreditDetailsResponse, CreditsTV } from '../../src/sections';

describe('Credits API integration', () => {
  const accessToken = process.env.TMDB_API_KEY!;
  let tmdb: TmdbClient;

  // Example credit IDs
  const movieCreditId = '52fe4250c3a36847f80149f7'; // Brad Pitt in Fight Club
  const tvCreditId = '6024a814c0ae36003d59cc3c'; // Pedro Pascal in The Last of Us
  const tvEpisodeCreditId = '5256c8b219c2956ff6047cd8'; // Peter Dinklage in Game of Thrones

  beforeAll(() => {
    tmdb = new TmdbClient(accessToken);
  });

  const validatePerson = (person: CreditDetailsResponse['person']) => {
    expect(person).toHaveProperty('id');
    expect(person).toHaveProperty('name');
    expect(person.media_type).toBe('person');
  };

  const validateMediaBase = (media: CreditDetailsResponse['media']) => {
    expect(media).toHaveProperty('id');
    expect(media).toHaveProperty('media_type');
    expect(typeof media.popularity).toBe('number');
  };

  it.each([
    { id: movieCreditId, type: 'movie' },
    { id: tvCreditId, type: 'tv' },
    { id: tvEpisodeCreditId, type: 'tv_episode' }, // <- new test
  ])('should fetch credit details for %s', async ({ id, type }) => {
    const res: CreditDetailsResponse = await tmdb.credits.getDetails(id);

    expect(res).toHaveProperty('credit_type');
    expect(res).toHaveProperty('department');
    expect(res).toHaveProperty('media');
    expect(res).toHaveProperty('person');

    // Person checks
    validatePerson(res.person);

    // Media checks
    validateMediaBase(res.media);

    // Narrowing by media_type
    if (res.media.media_type === 'tv') {
      const tvMedia = res.media as CreditsTV;
      expect(tvMedia.episodes).toBeDefined();
      expect(tvMedia.seasons).toBeDefined();

      if (tvMedia.episodes && tvMedia.episodes.length > 0) {
        expect(tvMedia.episodes[0]).toHaveProperty('episode_number');
        expect(tvMedia.episodes[0]).toHaveProperty('air_date');
      }

      if (tvMedia.seasons && tvMedia.seasons.length > 0) {
        expect(tvMedia.seasons[0]).toHaveProperty('season_number');
        expect(tvMedia.seasons[0]).toHaveProperty('episode_count');
      }

      // TV-specific character
      if (tvMedia.character) {
        expect(typeof tvMedia.character).toBe('string');
      }
    }

    console.log(`Credit details for ${type}:`, res);
  });
});
