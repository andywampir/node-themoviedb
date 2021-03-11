import type AccountEndpointNS from './v3/account';
import type AuthenticationEndpointNS from './v3/authentication';
import type CertificationsEndpointNS from './v3/certifications';
import type ChangesEndpointNS from './v3/changes';
import type CollectionsEndpointNS from './v3/collections';
import type CompaniesEndpointNS from './v3/companies';
import type ConfigurationEndpointNS from './v3/configuration';
import type CreditsEndpointNS from './v3/credits';
import type DiscoverEndpointNS from './v3/discover';
import type FindEndpointNS from './v3/find';
import type GenresEndpointNS from './v3/genres';
import type GuestSessionEndpointNS from './v3/guestSessions';
import type KeywordsEndpointNS from './v3/keywords';
import type ListsEndpointNS from './v3/lists';
import type MoviesEndpointNS from './v3/movies';
import type NetworksEndpointNS from './v3/networks';
import type PeopleEndpointNS from './v3/people';
import type ReviewsEndpointNS from './v3/reviews';
import type SearchEndpointNS from './v3/search';
import type TrendingEndpointNS from './v3/trending';
import type TVEpisodeGroupsEndpointNS from './v3/tvEpisodeGroups';
import type TVEpisodesEndpointNS from './v3/tvEpisodes';
import type TVSeasonsEndpointNS from './v3/tvSeasons';
import type TVShowEndpointNS from './v3/tvShow';

namespace MovieDBNS {
	export interface Class {
		setAccessToken(accessToken: string): void;
		setLanguage(language: string): void;
		setSessionID(sessionID: string): void;
		account(options?: Options.V3.Account): AccountEndpointNS.Class;
		authentication(): AuthenticationEndpointNS.Class;
		certifications(): CertificationsEndpointNS.Class;
		changes(): ChangesEndpointNS.Class;
		collections(options?: Options.V3.Collections): CollectionsEndpointNS.Class;
		companies(options?: Options.V3.Companies): CompaniesEndpointNS.Class;
		configuration(): ConfigurationEndpointNS.Class;
		credits(options?: Options.V3.Credits): CreditsEndpointNS.Class;
		discover(options?: Options.V3.Discover): DiscoverEndpointNS.Class;
		find(options?: Options.V3.Find): FindEndpointNS.Class;
		genres(options?: Options.V3.Genres): GenresEndpointNS.Class;
		guestSession(options?: Options.V3.GuestSessions): GuestSessionEndpointNS.Class;
		keywords(options?: Options.V3.Keywords): KeywordsEndpointNS.Class;
		lists(options?: Options.V3.Lists): ListsEndpointNS.Class;
		movies(options?: Options.V3.Movies): MoviesEndpointNS.Class;
		networks(options?: Options.V3.Networks): NetworksEndpointNS.Class;
		people(options?: Options.V3.People): PeopleEndpointNS.Class;
		reviews(): ReviewsEndpointNS.Class;
		search(options?: Options.V3.Search): SearchEndpointNS.Class;
		trending(): TrendingEndpointNS.Class;
		tvEpisodeGroups(options?: Options.V3.TVEpisodeGroups): TVEpisodeGroupsEndpointNS.Class;
		tvEpisodes(options?: Options.V3.TVEpisodes): TVEpisodesEndpointNS.Class;
		tvSeasons(options?: Options.V3.TVSeasons): TVSeasonsEndpointNS.Class;
		tvShow(options?: Options.V3.TVShow): TVShowEndpointNS.Class;
	}

	export namespace Options {
		export interface Constructor {
			accessToken: string;
			language?: string;
		}

		export namespace V3 {
			export interface Account {
				sessionID?: string;
				language?: string;
				userID?: number;
			}

			export interface Collections {
				collectionID?: number;
				language?: string;
			}

			export interface Companies {
				companyID?: number;
			}

			export interface Credits {
				creditID?: string;
			}

			export interface Discover {
				language?: string;
			}

			export interface Find extends Discover {}

			export interface Genres extends Discover {}

			export interface GuestSessions extends Discover {
				guestSessionID?: string;
			}

			export interface Keywords extends Discover {
				keywordID?: number;
			}

			export interface Lists extends Discover {
				sessionID?: string;
				listID?: string;
			}

			export interface Movies extends Discover {
				movieID?: number;
			}

			export interface Networks {
				networkID?: number;
			}

			export interface People extends Discover {
				personID?: number;
			}

			export interface Search extends Discover {}

			export interface TVEpisodeGroups extends Discover {
				id?: string;
			}

			export interface TVEpisodes extends Discover {
				tvID?: number;
				seasonNumber?: number;
				episodeNumber?: number;
			}

			export interface TVSeasons extends Discover {
				tvID?: number;
				seasonNumber?: number;
			}

			export interface TVShow extends Discover {
				tvID?: number;
			}
		}
	}
}

export default MovieDBNS;
