/* eslint-disable camelcase */

// Return Types
export interface NetworkReturnType {
  details?: NetworkDetails[];
  alternativeNames?: NetworkAlternativeNames[];
  images?: NetworkImages[];
}

interface NetworkDetails {
  headquarters: string;
  homepage: string;
  id: number;
  name: string;
  origin_country: string;
}

interface NetworkAlternativeNames {
  id: number;
  results: {
    name: string;
    type: string;
  }[];
}

interface NetworkImages {
  id: number;
  logos: {
    aspect_ratio: number;
    file_path: string;
    height: number;
    id: string;
    file_type: '.svg' | '.png';
    vote_average: number;
    vote_count: number;
    width: number;
  }[];
}
