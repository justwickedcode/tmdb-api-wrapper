import { TMDBClient } from '../../src/TMDBClient';

describe('NetworksEndpoints integration', () => {
  const accessToken = process.env.TMDB_API_KEY!;
  let tmdb: TMDBClient;

  beforeAll(() => {
    tmdb = new TMDBClient(accessToken);
  });

  const networkId = 213; // Example: HBO

  it('should fetch network details', async () => {
    const details = await tmdb.networks.getDetails(networkId);
    expect(details).toHaveProperty('id', networkId);
    expect(details).toHaveProperty('name');
    expect(details).toHaveProperty('homepage');
    expect(details).toHaveProperty('headquarters');
    console.log('Network details:', details);
  });

  it('should fetch alternative names', async () => {
    const altNames = await tmdb.networks.getAlternativeNames(networkId);
    expect(altNames).toHaveProperty('id', networkId);
    expect(Array.isArray(altNames.results)).toBe(true);
    altNames.results.forEach((name) => {
      expect(name).toHaveProperty('name');
      expect(name).toHaveProperty('type');
    });
    console.log('Alternative names:', altNames.results);
  });

  it('should fetch network images', async () => {
    const images = await tmdb.networks.getImages(networkId);
    expect(images).toHaveProperty('id', networkId);
    expect(Array.isArray(images.logos)).toBe(true);
    images.logos.forEach((logo) => {
      expect(logo).toHaveProperty('file_path');
      expect(logo).toHaveProperty('file_type');
      expect(logo).toHaveProperty('width');
      expect(logo).toHaveProperty('height');
    });
    console.log('Network logos:', images.logos.slice(0, 3));
  });

  it('should return error for invalid network ID', async () => {
    await expect(tmdb.networks.getDetails(0)).rejects.toThrow();
  });

  it('should handle networks with no alternative names gracefully', async () => {
    const altNames = await tmdb.networks.getAlternativeNames(8); // Example: Cartoon Network (might have empty results)
    expect(altNames).toHaveProperty('id', 8);
    expect(Array.isArray(altNames.results)).toBe(true);
    console.log('Alternative names (possibly empty):', altNames.results);
  });

  it('should handle networks with no logos gracefully', async () => {
    const images = await tmdb.networks.getImages(8); // Example: Cartoon Network (might have few logos)
    expect(images).toHaveProperty('id', 8);
    expect(Array.isArray(images.logos)).toBe(true);
    console.log('Network logos (possibly empty):', images.logos);
  });
});
