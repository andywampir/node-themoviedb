/* eslint-disable camelcase */

// Options
export interface NetworksConstructorOptions {
  apiKey: string;
  networkID?: number;
}

// Return Types
export interface NetworksReturnType {
  details?: NetworksDetails[];
  alternativeNames?: NetworksAlternativeNames[];
  images?: NetworksImages[];
}

interface NetworksDetails {
  headquarters: string;
  homepage: string;
  id: number;
  name: string;
  origin_country: string;
}

interface NetworksAlternativeNames {
  id: number;
  results: {
    name: string;
    type: string;
  }[];
}

interface NetworksImages {
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
