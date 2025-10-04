/** Network details returned by TMDB */
export interface NetworkDetails {
  id: number;
  name: string;
  headquarters: string;
  homepage: string;
  logo_path: string | null;
  origin_country: string;
}

/** Alternative name for a network */
export interface NetworkAlternativeName {
  name: string;
  type: string;
}

/** Response for alternative names */
export interface NetworkAlternativeNamesResponse {
  id: number;
  results: NetworkAlternativeName[];
}

/** Network logo info */
export interface NetworkLogo {
  aspect_ratio: number;
  file_path: string;
  height: number;
  id: string;
  file_type: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

/** Response for network images/logos */
export interface NetworkImagesResponse {
  id: number;
  logos: NetworkLogo[];
}
