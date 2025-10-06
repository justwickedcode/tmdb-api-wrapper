import { TMDBClient } from '../src/TMDBClient';

describe('Configuration API integration', () => {
    const accessToken = process.env.TMDB_API_KEY!;
    let tmdb: TMDBClient;

    beforeAll(() => {
        tmdb = new TMDBClient(accessToken);
    });

    it('should fetch configuration details', async () => {
        const details = await tmdb.configuration.getDetails();
        expect(details).toHaveProperty('images');
        expect(details.images).toHaveProperty('secure_base_url');
        expect(Array.isArray(details.change_keys)).toBe(true);
        console.log('Configuration details test output:', details);
    });

    it('should fetch configuration countries', async () => {
        const countries = await tmdb.configuration.getCountries('en-US');
        expect(Array.isArray(countries)).toBe(true);
        expect(countries[0]).toHaveProperty('iso_3166_1');
        console.log('Configuration countries test output:', countries);
    });

    it('should fetch configuration jobs', async () => {
        const jobs = await tmdb.configuration.getJobs();
        expect(Array.isArray(jobs)).toBe(true);
        expect(jobs[0]).toHaveProperty('department');
        console.log('Configuration jobs test output:', jobs);
    });

    it('should fetch configuration languages', async () => {
        const languages = await tmdb.configuration.getLanguages();
        expect(Array.isArray(languages)).toBe(true);
        expect(languages[0]).toHaveProperty('iso_639_1');
        console.log('Configuration languages test output:', languages);
    });

    it('should fetch primary translations', async () => {
        const translations = await tmdb.configuration.getPrimaryTranslations();
        expect(Array.isArray(translations)).toBe(true);
        console.log('Configuration primary translations test output:', translations);
    });

    it('should fetch timezones', async () => {
        const timezones = await tmdb.configuration.getTimezones();
        expect(Array.isArray(timezones)).toBe(true);
        expect(timezones[0]).toHaveProperty('iso_3166_1');
        console.log('Configuration timezones test output:', timezones);
    });
});
