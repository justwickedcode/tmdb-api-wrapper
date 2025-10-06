import { TMDBClient } from '../../src/TMDBClient';

describe('ReviewsEndpoints integration', () => {
  const accessToken = process.env.TMDB_API_KEY!;
  let tmdb: TMDBClient;

  beforeAll(() => {
    tmdb = new TMDBClient(accessToken);
  });

  const reviewId = '640b2aeecaaca20079decdcc'; // Example review ID

  it('should fetch review details', async () => {
    const review = await tmdb.reviews.getDetails(reviewId);
    expect(review).toHaveProperty('id', reviewId);
    expect(review).toHaveProperty('author');
    expect(review).toHaveProperty('content');
    expect(review.author_details).toHaveProperty('username');
    expect(review.author_details).toHaveProperty('name');
    expect(review.author_details).toHaveProperty('avatar_path');
    expect(typeof review.media_id).toBe('number');
    expect(['movie', 'tv']).toContain(review.media_type);
    console.log('Review details:', review);
  });

  it('should include author rating if present', async () => {
    const review = await tmdb.reviews.getDetails(reviewId);
    const rating = review.author_details.rating;
    if (rating !== null) {
      expect(typeof rating).toBe('number');
      expect(rating).toBeGreaterThanOrEqual(0);
      expect(rating).toBeLessThanOrEqual(10);
    } else {
      console.log('Author rating is null');
    }
  });

  it('should handle invalid review ID gracefully', async () => {
    await expect(tmdb.reviews.getDetails('invalid-id')).rejects.toThrow();
  });

  it('should have valid ISO language code', async () => {
    const review = await tmdb.reviews.getDetails(reviewId);
    expect(review.iso_639_1.length).toBe(2); // ISO 639-1 code
  });

  it('should include updated_at and created_at timestamps', async () => {
    const review = await tmdb.reviews.getDetails(reviewId);
    expect(new Date(review.created_at).toString()).not.toBe('Invalid Date');
    expect(new Date(review.updated_at).toString()).not.toBe('Invalid Date');
  });

  it('should return valid URL for review', async () => {
    const review = await tmdb.reviews.getDetails(reviewId);
    expect(review.url).toMatch(/^https?:\/\//);
  });
});
