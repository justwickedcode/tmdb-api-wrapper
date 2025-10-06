import { TMDBClientV4 } from '../../src/TMDBClientV4';
import {
  TMDBListAddRemoveItemsRequest,
  TMDBListCreateRequest,
} from '../../src/sections/v4/lists/types';

const tmdb = new TMDBClientV4(process.env.TMDB_API_KEY!); // <- must be user access token
// TODO: Understand how it works and fix
describe.skip('TMDB V4 Lists API (Live)', () => {
  let listId: number;

  it('should create a new list', async () => {
    const body: TMDBListCreateRequest = {
      name: 'Test List',
      description: 'Integration test list',
      iso_639_1: 'en',
      public: false,
    };

    const res = await tmdb.lists.create(body);
    expect(res.success).toBe(true);
    expect(res.id).toBeDefined();
    listId = res.id!;
  });

  it('should get list details', async () => {
    const details = await tmdb.lists.getDetails(listId);
    expect(details.name).toBe('Test List');
  });

  it('should add an item to the list', async () => {
    const body: TMDBListAddRemoveItemsRequest = {
      items: [{ media_type: 'movie', media_id: 550 }],
    };

    const res = await tmdb.lists.addItems(listId, body);
    expect(res.success).toBe(true);
  });

  it('should confirm item is present', async () => {
    const res = await tmdb.lists.getItemStatus(listId, 550);
    expect(res.item_present).toBe(true);
  });

  it('should remove the item from the list', async () => {
    const body: TMDBListAddRemoveItemsRequest = {
      items: [{ media_type: 'movie', media_id: 550 }],
    };

    const res = await tmdb.lists.removeItems(listId, body);
    expect(res.success).toBe(true);
  });

  it('should clear the list', async () => {
    const res = await tmdb.lists.clear(listId);
    expect(res.success).toBe(true);
  });

  it('should delete the list', async () => {
    const res = await tmdb.lists.delete(listId);
    expect(res.success).toBe(true);
  });
});
