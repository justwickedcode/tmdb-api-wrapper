import { TmdbClient } from '../../src/tmdb-client';
import {
  CollectionDetailsResponse,
  CollectionImagesResponse,
  CollectionTranslationsResponse,
} from '../../src/sections';

describe('Collections API', () => {
  const apiKey = process.env.TMDB_API_KEY!;
  let tmdb: TmdbClient;

  const COLLECTION_IDS = [
    { id: 86311, type: 'Movie', name: 'Avengers Collection' },
    { id: 10, type: 'Movie', name: 'Star Wars Collection' },
  ];

  const LANGUAGES = ['en-US', 'fr-FR']; // English and French

  beforeAll(() => {
    tmdb = new TmdbClient(apiKey);
  });

  const validateCollectionParts = (parts: CollectionDetailsResponse['parts']) => {
    expect(Array.isArray(parts)).toBe(true);
    if (parts.length > 0) {
      const first = parts[0];
      expect(first).toHaveProperty('id');
      expect(typeof first.id).toBe('number');
      expect(first.title || first.name).toBeDefined();
      expect(typeof (first.title || first.name)).toBe('string');
    }
  };

  COLLECTION_IDS.forEach(({ id, type, name }) => {
    describe(`${name} (${type})`, () => {
      LANGUAGES.forEach((lang) => {
        it(`fetches collection details with language param: ${lang}`, async () => {
          const params = { language: lang };
          console.log(`Testing getDetails for ${name} with params:`, params);

          const res: CollectionDetailsResponse = await tmdb.collections.getDetails(id, params);
          expect(res.id).toBe(id);
          expect(typeof res.name).toBe('string');
          validateCollectionParts(res.parts);
        });

        it(`fetches collection images with language param: ${lang}`, async () => {
          const params = { language: lang, include_image_language: `${lang},null` };
          console.log(`Testing getImages for ${name} with params:`, params);

          const res: CollectionImagesResponse = await tmdb.collections.getImages(id, params);
          expect(res.id).toBe(id);
          expect(Array.isArray(res.backdrops)).toBe(true);
          expect(Array.isArray(res.posters)).toBe(true);
        });
      });

      it('fetches collection details without params', async () => {
        console.log(`Testing getDetails for ${name} with no params`);

        const res: CollectionDetailsResponse = await tmdb.collections.getDetails(id);
        expect(res.id).toBe(id);
        expect(typeof res.name).toBe('string');
        validateCollectionParts(res.parts);
      });

      it('fetches collection images with no params', async () => {
        console.log(`Testing getImages for ${name} with no params`);

        const res: CollectionImagesResponse = await tmdb.collections.getImages(id);
        expect(res.id).toBe(id);
        expect(Array.isArray(res.backdrops)).toBe(true);
        expect(Array.isArray(res.posters)).toBe(true);
      });

      it('fetches collection translations', async () => {
        console.log(`Testing getTranslations for ${name}`);

        const res: CollectionTranslationsResponse = await tmdb.collections.getTranslations(id);
        expect(res.id).toBe(id);
        expect(Array.isArray(res.translations)).toBe(true);

        if (res.translations.length > 0) {
          const t = res.translations[0];
          expect(t).toHaveProperty('iso_639_1');
          expect(t).toHaveProperty('iso_3166_1');
          expect(t.data).toHaveProperty('title');
          expect(t.data).toHaveProperty('overview');
        }
      });
    });
  });
});
