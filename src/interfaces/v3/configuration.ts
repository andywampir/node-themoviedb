/* eslint-disable camelcase */

// Return Types
export interface ConfigurationReturnType {
	api?: ConfigurationAPI[];
	countries?: ConfigurationCountries[][];
	jobs?: ConfigurationJobs[][];
	languages?: ConfigurationLanguages[][];
	primaryTranslations?: string[][];
	timezones?: ConfigurationTimezones[];
}

interface ConfigurationAPI {
	change_keys: string[];
	images: {
		base_url: string;
		secure_base_url: string;
		backdrop_sizes: string[];
		logo_sizes: string[];
		poster_sizes: string[];
		profile_sizes: string[];
		still_sizes: string[];
	};
}

interface ConfigurationCountries {
	iso_3166_1: string;
	english_name: string;
}

interface ConfigurationJobs {
	department: string;
	jobs: string[];
}

interface ConfigurationLanguages {
	iso_639_1: string;
	english_name: string;
	name: string;
}

interface ConfigurationTimezones {
	iso_3166_1: string;
	zones: string[];
}
