export interface TMDBListItem {
  media_type: 'movie' | 'tv';
  media_id: number;
}

export interface TMDBListCreateRequest {
  name: string;
  description?: string;
  iso_639_1?: string;
  public?: boolean;
  sort_by?: string;
}

export interface TMDBListUpdateRequest {
  name?: string;
  description?: string;
  iso_639_1?: string;
  public?: boolean;
  sort_by?: string;
}

export interface TMDBListAddRemoveItemsRequest {
  items: TMDBListItem[];
}

export interface TMDBListResponse {
  id: number;
  name: string;
  description: string;
  public: boolean;
  sort_by: string;
  page?: number;
  total_pages?: number;
  results?: TMDBListItem[];
}

export interface TMDBListItemStatusResponse {
  id: number;
  item_present: boolean;
}

export interface TMDBGenericResponse {
  success: boolean;
  status_message: string;
  id: number;
}
