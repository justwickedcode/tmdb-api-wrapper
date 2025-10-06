/** Single certification entry */
export interface Certification {
  certification: string; // e.g., "PG-13"
  meaning: string; // e.g., "Parents strongly cautioned"
  order: number; // Sorting order
}

/** Response for movie certifications */
export interface MovieCertificationsResponse {
  certifications: Record<string, Certification[]>; // Country code -> array of certifications
}

/** Response for TV certifications */
export interface TVCertificationsResponse {
  certifications: Record<string, Certification[]>; // Country code -> array of certifications
}
