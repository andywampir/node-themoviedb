/* eslint-disable camelcase */
import { EpisodeToAir } from '../common';

// Options
export interface TVEpisodeGroupsDetailsOptions {
	id?: string;
	language?: string;
}

// Return Types
export interface TVEpisodeGroupsReturnType {
	details?: TVEpisodeGroupsDetails[];
}

interface TVEpisodeGroupsDetails {
	id: string;
	name: string;
	description: string;
	episode_count: number;
	group_count: number;
	groups: {
		id: string;
		name: string;
		order: number;
		locked: boolean;
		episodes: Episode[];
	}[];
	network: {
		id: number;
		logo_path: string | null;
		name: string;
		origin_country: string;
	};
	type: number;
}

interface Episode extends EpisodeToAir {
	order: number;
}
