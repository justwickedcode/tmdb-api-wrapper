import { TMDBClient } from '../../src/TMDBClient';
import {
  Certification,
  MovieCertificationsResponse,
  TVCertificationsResponse,
} from '../../src/sections/certifications/types';

describe('Certifications API integration', () => {
  const accessToken = process.env.TMDB_API_KEY!;
  let tmdb: TMDBClient;

  beforeAll(() => {
    tmdb = new TMDBClient(accessToken);
  });

  it('should fetch movie certifications', async () => {
    const res: MovieCertificationsResponse = await tmdb.certifications.getMovieCertifications();
    expect(res).toHaveProperty('certifications');
    const countries = Object.keys(res.certifications);
    expect(countries.length).toBeGreaterThan(0);

    const firstCountry: Certification[] = res.certifications[countries[0]];
    expect(firstCountry[0]).toHaveProperty('certification');
    expect(firstCountry[0]).toHaveProperty('meaning');
    expect(firstCountry[0]).toHaveProperty('order');

    console.log('Movie certifications:', countries);
  });

  it('should fetch TV certifications', async () => {
    const res: TVCertificationsResponse = await tmdb.certifications.getTVCertifications();
    expect(res).toHaveProperty('certifications');
    const countries = Object.keys(res.certifications);
    expect(countries.length).toBeGreaterThan(0);

    const firstCountry: Certification[] = res.certifications[countries[0]];
    expect(firstCountry[0]).toHaveProperty('certification');
    expect(firstCountry[0]).toHaveProperty('meaning');
    expect(firstCountry[0]).toHaveProperty('order');

    console.log('TV certifications:', countries);
  });
});
