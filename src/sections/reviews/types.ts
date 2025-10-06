/** Details of the author of a review */
export interface ReviewAuthorDetails {
  name: string;
  username: string;
  avatar_path: string | null;
  rating: number | null;
}

/** Review details response from TMDBClient */
export interface ReviewDetails {
  id: string;
  author: string;
  author_details: ReviewAuthorDetails;
  content: string;
  created_at: string;
  updated_at: string;
  iso_639_1: string;
  media_id: number;
  media_title: string;
  media_type: string;
  url: string;
}
