/** Represents detailed info about a company */
export interface CompanyDetails {
  id: number;
  name: string;
  description: string;
  headquarters: string;
  homepage: string;
  logo_path: string | null;
  origin_country: string;
  parent_company: string | null;
}

/** Represents a single alternative name for a company */
export interface CompanyAlternativeName {
  name: string;
  type: string;
}

/** Response for alternative names endpoint */
export interface CompanyAlternativeNamesResponse {
  id: number;
  results: CompanyAlternativeName[];
}

/** Represents a single company logo/image */
export interface CompanyImage {
  file_path: string;
  width: number;
  height: number;
  file_type: string;
}

/** Response for company images endpoint */
export interface CompanyImagesResponse {
  id: number;
  logos: CompanyImage[];
}
