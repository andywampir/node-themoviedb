/* eslint-disable camelcase */
import { Image } from '../common';

// Options
export interface CollectionsConstructorOptions {
	apiKey: string;
	language: string;
	collectionID?: number;
}

interface CommonParameters {
	collectionID?: number;
	language?: string;
}

export interface CollectionsDetailsOptions extends CommonParameters {}
export interface CollectionsImagesOptions extends CommonParameters {}
export interface CollectionsTranslationsOptions extends CommonParameters {}

// Return types
export interface CollectionsReturnType {
	details?: CollectionsDetails[];
	images?: CollectionsImages[];
	translations?: CollectionsTranslations[];
}

interface CollectionsDetails {
	id: number;
	name: string;
	overview: string;
	poster_path: null;
	backdrop_path: string;
	parts: CollectionsDetailsPart[];
}

interface CollectionsDetailsPart {
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

interface CollectionsImages {
	id: number;
	backdrops: CollectionsImage<null>[];
	posters: CollectionsImage<string>[];
}

interface CollectionsImage<ISOType> extends Image {
	iso_639_1: ISOType;
}

interface CollectionsTranslations {
	id: number;
	translations: CollectionsTranslation[];
}

interface CollectionsTranslation {
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
