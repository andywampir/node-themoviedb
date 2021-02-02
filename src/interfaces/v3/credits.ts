/* eslint-disable camelcase */

// Options
export interface CreditsConstructorOptions {
	apiKey: string;
	creditID?: string;
}

// Return Types
export interface CreditsReturnType {
	details: CreditsDetails[];
}

interface CreditsDetails {
	credit_type: string;
	department: string;
	job: string;
	media: {
		id: number;
		name: string;
		original_name: string;
		character: string;
		episodes: unknown[];
		seasons: {
			air_date: string;
			poster_path: string;
			season_number: number;
		}[];
	};
	media_type: string;
	id: string;
	person: {
		name: string;
		id: number;
	};
}
