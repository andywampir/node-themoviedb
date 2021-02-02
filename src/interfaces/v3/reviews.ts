/* eslint-disable camelcase */

// Return Types
export interface ReviewsReturnType {
	get?: ReviewsGet[];
}

interface ReviewsGet {
	id: string;
	author: string;
	content: string;
	iso_639_1: string;
	media_id: number;
	media_title: string;
	media_type: string;
	url: string;
}
