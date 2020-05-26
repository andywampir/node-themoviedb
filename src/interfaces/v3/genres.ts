/* eslint-disable camelcase */

// Options
export interface GenresConstructorOptions {
  apiKey: string;
  language: string;
}

// Return Types
export interface GenresReturnType {
  movie?: GenresMovie[];
  tv?: GenresTV[];
}

interface CommonReturnType {
  genres: {
    id: number;
    name: string;
  }[];
}

interface GenresMovie extends CommonReturnType {}
interface GenresTV extends CommonReturnType {}
