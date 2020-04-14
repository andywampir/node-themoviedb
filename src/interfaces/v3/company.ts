/* eslint-disable camelcase */
import { Image } from '../common';

// Return types
export interface CompanyReturnType {
  details?: CompanyDetails[];
  alternativeNames?: CompanyAlternativeNames[];
  images?: CompanyImages[];
}

interface CompanyDetails {
  description: string;
  headquarters: string;
  homepage: string;
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
  parent_company: CompanyDetails;
}

interface CompanyAlternativeNames {
  id: number;
  results: {
    name: string;
    type: string;
  }[];
}

interface CompanyImages {
  id: number;
  logos: CompanyLogo[];
}

interface CompanyLogo extends Image {
  id: string;
  file_type: '.svg' | '.png';
}
