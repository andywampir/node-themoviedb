/* eslint-disable camelcase */

// Return Types
export interface GenreReturnType {
  movie?: GenreMovie[];
  tv?: GenreTV[];
}

interface CommonReturnType {
  genres: {
    id: number;
    name: string;
  }[];
}

interface GenreMovie extends CommonReturnType {}
interface GenreTV extends CommonReturnType {}
