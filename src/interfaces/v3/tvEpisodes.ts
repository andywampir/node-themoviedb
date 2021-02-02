/* eslint-disable camelcase */
import {
	TVEpisode, CastCredit,
	CrewCredit, ExternalIDs,
	ImageWithISO639, ResponseWithCode,
	TVShowVideo,
} from '../common';

// Options
interface CommonParameters {
	tvID?: number;
	seasonNumber?: number;
	episodeNumber?: number;
}

export interface TVEpisodesDetailsOptions extends CommonParameters {
	language?: string;
	appendToResponse?: string;
}

export interface TVEpisodesChangesOptions {
	episodeID?: number;
}

export interface TVEpisodesAccountStatesOptions extends CommonParameters {
	guestSessionID?: string;
	sessionID?: string;
}

export interface TVEpisodesCreditsOptions extends CommonParameters {}
export interface TVEpisodesExternalIDsOptions extends CommonParameters {}
export interface TVEpisodesImagesOptions extends CommonParameters {}
export interface TVEpisodesTranslationsOptions extends CommonParameters {}

export interface TVEpisodesRateOptions extends CommonParameters {
	guestSessionID?: string;
	sessionID?: string;
}

export interface TVEpisodesDeleteRatingOptions extends CommonParameters {
	guestSessionID?: string;
	sessionID?: string;
}

export interface TVEpisodesVideosOptions extends CommonParameters {
	language?: string;
}

// Return Types
export interface TVEpisodesReturnType {
	details?: TVEpisodesDetails[];
	changes?: TVEpisodesChanges[];
	accountStates?: TVEpisodesAccountStates[];
	credits?: TVEpisodesCredits[];
	externalIDs?: TVEpisodesExternalIDs[];
	images?: TVEpisodesImages[];
	translations?: TVEpisodesTranslations[];
	rate?: TVEpisodesRate[];
	deleteRating?: TVEpisodesDeleteRating[];
	videos?: TVEpisodesVideos[];
}

interface TVEpisodesDetails extends TVEpisode {
	credits?: Omit<TVEpisodesCredits, 'id'>;
	external_ids?: Omit<TVEpisodesExternalIDs, 'id'>;
	images?: Omit<TVEpisodesImages, 'id'>;
	translations?: Omit<TVEpisodesTranslations, 'id'>;
	videos?: Omit<TVEpisodesVideos, 'id'>;
}

interface TVEpisodesChanges {
	changes: {
		key: string;
		items: {
			id: string;
			action: string;
			time: string;
			value: string;
			iso_639_1: string;
		}[];
	}[];
}

interface TVEpisodesAccountStates {
	id: number;
	rated: { value: number } | boolean;
}

interface TVEpisodesCredits {
	id: number;
	cast: CastCredit[];
	crew: CrewCredit[];
	guest_stars: CastCredit[];
}

interface TVEpisodesExternalIDs extends Omit<ExternalIDs, 'twitter_id' | 'facebook_id' | 'instagram_id'> {
	id: number;
}

interface TVEpisodesImages {
	id: number;
	stills: ImageWithISO639[];
}

interface TVEpisodesTranslations {
	id: number;
	translations: {
		iso_3166_1: string;
		iso_639_1: string;
		name: string;
		english_name: string;
		data: {
			name: string;
			overview: string;
		};
	}[];
}

interface TVEpisodesRate extends ResponseWithCode {}
interface TVEpisodesDeleteRating extends ResponseWithCode {}

interface TVEpisodesVideos {
	id: number;
	results: TVShowVideo[];
}
