import { TMDBClientV3 } from '../../src/TMDBClientV3';

// TODO: Figure out how it works and fix
describe.skip('TMDBClientV3 Lists API (Integration)', () => {
  const accessToken = process.env.TMDB_API_KEY!;
  const sessionId = process.env.TMDB_SESSION_ID!;
  const tmdb = new TMDBClientV3(accessToken);

  let createdListId: number;

  beforeAll(() => {
    if (!accessToken || !sessionId) {
      throw new Error('TMDB_API_KEY and TMDB_SESSION_ID environment variables are required.');
    }
  });

  it('should create a new list', async () => {
    const res = await tmdb.lists.create(sessionId, {
      name: 'Integration Test List',
      description: 'Temporary list for API integration testing',
      language: 'en',
    });

    expect(res.success).toBe(true);
    expect(res.list_id).toBeDefined();
    createdListId = res.list_id!;
    console.log('Created list ID:', createdListId);
  });

  it('should fetch list details', async () => {
    const details = await tmdb.lists.getDetails(createdListId);
    expect(details).toHaveProperty('id', createdListId);
    expect(details).toHaveProperty('name');
    expect(Array.isArray(details.items)).toBe(true);
    console.log('List details:', details.name);
  });

  it('should add a movie to the list', async () => {
    const res = await tmdb.lists.addItem(createdListId, sessionId, { media_id: 550 }); // Fight Club
    expect(res.status_code).toBe(12); // 12 = item added
    console.log('Added movie:', res);
  });

  it('should verify the movie is in the list', async () => {
    const res = await tmdb.lists.getItemStatus(createdListId, { movie_id: 550 });
    expect(res.item_present).toBe(true);
    console.log('Item status:', res);
  });

  it('should remove the movie from the list', async () => {
    const res = await tmdb.lists.removeItem(createdListId, sessionId, { media_id: 550 });
    expect(res.status_code).toBe(13); // 13 = item deleted
    console.log('Removed movie:', res);
  });

  it('should clear the list (should be empty afterwards)', async () => {
    const res = await tmdb.lists.clear(createdListId, sessionId, true);
    expect(res.status_code).toBe(12); // 12 = success
    const updated = await tmdb.lists.getDetails(createdListId);
    expect(updated.item_count).toBe(0);
    console.log('List cleared');
  });

  it('should delete the list', async () => {
    const res = await tmdb.lists.delete(createdListId, sessionId);
    expect(res.status_code).toBe(12);
    console.log('List deleted:', res);
  });
});
