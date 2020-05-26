/* eslint-disable camelcase */
import { Image } from '../common';

// Options
export interface CompaniesConstructorOptions {
  apiKey: string;
  companyID?: number;
}

// Return types
export interface CompaniesReturnType {
  details?: CompaniesDetails[];
  alternativeNames?: CompaniesAlternativeNames[];
  images?: CompaniesImages[];
}

interface CompaniesDetails {
  description: string;
  headquarters: string;
  homepage: string;
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
  parent_company: CompaniesDetails;
}

interface CompaniesAlternativeNames {
  id: number;
  results: {
    name: string;
    type: string;
  }[];
}

interface CompaniesImages {
  id: number;
  logos: CompaniesLogo[];
}

interface CompaniesLogo extends Image {
  id: string;
  file_type: '.svg' | '.png';
}
