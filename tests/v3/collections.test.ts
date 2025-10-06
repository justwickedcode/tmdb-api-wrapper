import { TMDBClientV3 } from '../../src/TMDBClientV3';
import {
  CollectionDetailsResponse,
  CollectionImagesResponse,
  CollectionTranslationsResponse,
} from '../../src/sections/v3/collections/types';

describe('Collections API', () => {
  const apiKey = process.env.TMDB_API_KEY!;
  let tmdb: TMDBClientV3;
  const COLLECTION_ID = 86311; // Avengers Collection

  beforeAll(() => {
    tmdb = new TMDBClientV3(apiKey);
  });

  it('fetches collection details successfully', async () => {
    const res: CollectionDetailsResponse = await tmdb.collections.getDetails(COLLECTION_ID, {
      language: 'en-US',
    });

    expect(res.id).toBe(COLLECTION_ID);
    expect(typeof res.name).toBe('string');
    expect(Array.isArray(res.parts)).toBe(true);
  });

  it('fetches collection images successfully', async () => {
    const res: CollectionImagesResponse = await tmdb.collections.getImages(COLLECTION_ID);
    expect(res.id).toBe(COLLECTION_ID);
    expect(Array.isArray(res.backdrops)).toBe(true);
    expect(Array.isArray(res.posters)).toBe(true);
  });

  it('fetches collection translations successfully', async () => {
    const res: CollectionTranslationsResponse =
      await tmdb.collections.getTranslations(COLLECTION_ID);

    expect(res.id).toBe(COLLECTION_ID);
    expect(Array.isArray(res.translations)).toBe(true);

    if (res.translations.length) {
      const t = res.translations[0];
      expect(t).toHaveProperty('iso_639_1');
      expect(t.data).toHaveProperty('title');
    }
  });
});
