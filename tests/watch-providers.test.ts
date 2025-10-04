// sections/watchProviders/WatchProvidersEndpoints.test.ts
import { TMDBClient } from '../src/TMDBClient';

describe('WatchProvidersEndpoints integration', () => {
  const accessToken = process.env.TMDB_API_KEY!;
  let tmdb: TMDBClient;

  beforeAll(() => {
    tmdb = new TMDBClient(accessToken);
  });

  it('should fetch available regions', async () => {
    const regions = await tmdb.watchProviders.getRegions();
    expect(Array.isArray(regions.results)).toBe(true);
    expect(regions.results.length).toBeGreaterThan(0);
    const region = regions.results[0];
    expect(region).toHaveProperty('iso_3166_1');
    expect(region).toHaveProperty('english_name');
    expect(region).toHaveProperty('native_name');
    console.log('Available regions:', regions.results.slice(0, 3));
  });

  it('should fetch movie watch providers', async () => {
    const providers = await tmdb.watchProviders.getMovieProviders({ watch_region: 'US' });
    expect(Array.isArray(providers.results)).toBe(true);
    if (providers.results.length > 0) {
      const provider = providers.results[0];
      expect(provider).toHaveProperty('provider_id');
      expect(provider).toHaveProperty('provider_name');
      expect(provider).toHaveProperty('logo_path');
    }
    console.log('Movie providers (US):', providers.results.slice(0, 3));
  });

  it('should fetch TV watch providers', async () => {
    const providers = await tmdb.watchProviders.getTVProviders({ watch_region: 'US' });
    expect(Array.isArray(providers.results)).toBe(true);
    if (providers.results.length > 0) {
      const provider = providers.results[0];
      expect(provider).toHaveProperty('provider_id');
      expect(provider).toHaveProperty('provider_name');
      expect(provider).toHaveProperty('logo_path');
    }
    console.log('TV providers (US):', providers.results.slice(0, 3));
  });
});
