/* eslint-disable camelcase */
import { Image } from '../common';

// Options
export interface CollectionConstructorOptions {
  apiKey: string;
  language: string;
  collectionID?: number;
}

interface CommonParameters {
  collectionID?: number;
  language?: string;
}

export interface CollectionDetailsOptions extends CommonParameters {}
export interface CollectionImagesOptions extends CommonParameters {}
export interface CollectionTranslationsOptions extends CommonParameters {}

// Return types
export interface CollectionReturnType {
  details?: CollectionDetails[];
  images?: CollectionImages[];
  translations?: CollectionTranslations[];
}

interface CollectionDetails {
  id: number;
  name: string;
  overview: string;
  poster_path: null;
  backdrop_path: string;
  parts: CollectionDetailsPart[];
}

interface CollectionDetailsPart {
  adult: boolean;
  backdrop_path: null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  popularity: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface CollectionImages {
  id: number;
  backdrops: CollectionImage<null>[];
  posters: CollectionImage<string>[];
}

interface CollectionImage<ISOType> extends Image {
  iso_639_1: ISOType;
}

interface CollectionTranslations {
  id: number;
  translations: CollectionTranslation[];
}

interface CollectionTranslation {
  iso_3166_1: string;
  iso_639_1: string;
  name: string;
  english_name: string;
  data: {
    title: string;
    overview: string;
    homepage: string;
  };
}
