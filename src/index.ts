import Client, { IClient } from './utils/Client';

import AccountEndpoint from './endpoints/v3/AccountEndpoint';
import AuthentificationEndpoint from './endpoints/v3/AuthenticationEndpoint';
import CertificationsEndpoint from './endpoints/v3/CertificationsEndpoint';
import ChangesEndpoint from './endpoints/v3/ChangesEndpoint';
import CollectionsEndpoint from './endpoints/v3/CollectionsEndpoint';
import CompaniesEndpoint from './endpoints/v3/CompaniesEndpoint';
import ConfigurationEndpoint from './endpoints/v3/ConfigurationEndpoint';
import CreditsEndpoint from './endpoints/v3/CreditsEndpoint';
import DiscoverEndpoint from './endpoints/v3/DiscoverEndpoint';
import FindEndpoint from './endpoints/v3/FindEndpoints';
import GenresEndpoint from './endpoints/v3/GenresEndpoint';
import GuestSessionEndpoint from './endpoints/v3/GuestSessionEndpoiunt';
import KeywordsEndpoint from './endpoints/v3/KeywordsEndpoint';
import ListsEndpoint from './endpoints/v3/ListsEndpoint';
import MoviesEndpoint from './endpoints/v3/MoviesEndpoint';
import NetworksEndpoint from './endpoints/v3/NetworksEndpoint';
import PeopleEndpoint from './endpoints/v3/PeopleEndpoint';
import TrendingEndpoint from './endpoints/v3/TrendingEndpoint';
import SearchEndpoint from './endpoints/v3/SearchEndpoint';
import ReviewsEndpoint from './endpoints/v3/ReviewsEndpoint';
import TVShowEndpoint from './endpoints/v3/TVShowEndpoint';
import TVSeasonsEndpoint from './endpoints/v3/TVSeasonsEndpoint';
import TVEpisodesEndpoint from './endpoints/v3/TVEpisodesEndpoint';
import TVEpisodeGroupsEndpoint from './endpoints/v3/TVEpisodeGroupsEndpoint';

import { RequiredParameterError } from './errors';

import MovieDBNS from './interfaces/moviedb';

export default class MovieDB implements MovieDBNS.Class {
	private apiKey: string;
	private language: string;
	private sessionID?: string;
	private readonly clientV3: IClient;
	private readonly clientV4: IClient;

	public constructor(options: MovieDBNS.Options.Constructor) {
		if (!options.apiKey)
			throw new RequiredParameterError('apiKey');

		this.apiKey = options.apiKey;
		this.language = options.language ?? 'en-US';
		this.clientV3 = new Client(3);
		this.clientV4 = new Client(4);
	}

	public setApiKey(apiKey: string): void {
		if (!apiKey || typeof apiKey !== 'string')
			throw new RequiredParameterError('apiKey');

		this.apiKey = apiKey;
	}

	public setLanguage(language: string): void {
		this.language = language;
	}

	public setSessionID(sessionID: string): void {
		if (!sessionID || typeof sessionID !== 'string')
			throw new RequiredParameterError('sessionID');

		this.sessionID = sessionID;
	}

	public account(options?: MovieDBNS.Options.V3.Account): AccountEndpoint {
		return new AccountEndpoint({
			apiKey: this.apiKey,
			sessionID: options?.sessionID ?? this.sessionID,
			language: options?.language ?? this.language,
			userID: options?.userID,
			client: this.clientV3,
		});
	}

	public authentication(): AuthentificationEndpoint {
		return new AuthentificationEndpoint({
			apiKey: this.apiKey,
			client: this.clientV3,
		});
	}

	public certifications(): CertificationsEndpoint {
		return new CertificationsEndpoint({
			apiKey: this.apiKey,
			client: this.clientV3,
		});
	}

	public changes(): ChangesEndpoint {
		return new ChangesEndpoint({
			apiKey: this.apiKey,
			client: this.clientV3,
		});
	}

	public collections(options?: MovieDBNS.Options.V3.Collections): CollectionsEndpoint {
		return new CollectionsEndpoint({
			apiKey: this.apiKey,
			language: options?.language ?? this.language,
			collectionID: options?.collectionID,
			client: this.clientV3,
		});
	}

	public companies(options?: MovieDBNS.Options.V3.Companies): CompaniesEndpoint {
		return new CompaniesEndpoint({
			apiKey: this.apiKey,
			client: this.clientV3,
			companyID: options?.companyID,
		});
	}

	public configuration(): ConfigurationEndpoint {
		return new ConfigurationEndpoint({
			apiKey: this.apiKey,
			client: this.clientV3,
		});
	}

	public credits(options?: MovieDBNS.Options.V3.Credits): CreditsEndpoint {
		return new CreditsEndpoint({
			apiKey: this.apiKey,
			client: this.clientV3,
			creditID: options?.creditID,
		});
	}

	public discover(options?: MovieDBNS.Options.V3.Discover): DiscoverEndpoint {
		return new DiscoverEndpoint({
			apiKey: this.apiKey,
			client: this.clientV3,
			language: options?.language ?? this.language,
		});
	}

	public find(options?: MovieDBNS.Options.V3.Find): FindEndpoint {
		return new FindEndpoint({
			apiKey: this.apiKey,
			client: this.clientV3,
			language: options?.language ?? this.language,
		});
	}

	public genres(options?: MovieDBNS.Options.V3.Genres): GenresEndpoint {
		return new GenresEndpoint({
			apiKey: this.apiKey,
			client: this.clientV3,
			language: options?.language ?? this.language,
		});
	}

	public guestSession(options?: MovieDBNS.Options.V3.GuestSessions): GuestSessionEndpoint {
		return new GuestSessionEndpoint({
			apiKey: this.apiKey,
			client: this.clientV3,
			language: options?.language ?? this.language,
			guestSessionID: options?.guestSessionID,
		});
	}

	public keywords(options?: MovieDBNS.Options.V3.Keywords): KeywordsEndpoint {
		return new KeywordsEndpoint({
			apiKey: this.apiKey,
			client: this.clientV3,
			language: options?.language ?? this.language,
			keywordID: options?.keywordID,
		});
	}

	public lists(options?: MovieDBNS.Options.V3.Lists): ListsEndpoint {
		return new ListsEndpoint({
			apiKey: this.apiKey,
			client: this.clientV3,
			language: options?.language ?? this.language,
			listID: options?.listID,
			sessionID: options?.sessionID ?? this.sessionID,
		});
	}

	public movies(options?: MovieDBNS.Options.V3.Movies): MoviesEndpoint {
		return new MoviesEndpoint({
			apiKey: this.apiKey,
			client: this.clientV3,
			language: options?.language ?? this.language,
			movieID: options?.movieID,
		});
	}

	public networks(options?: MovieDBNS.Options.V3.Networks): NetworksEndpoint {
		return new NetworksEndpoint({
			apiKey: this.apiKey,
			client: this.clientV3,
			networkID: options?.networkID,
		});
	}

	public people(options?: MovieDBNS.Options.V3.People): PeopleEndpoint {
		return new PeopleEndpoint({
			apiKey: this.apiKey,
			client: this.clientV3,
			language: options?.language ?? this.language,
			personID: options?.personID,
		});
	}

	public trending(): TrendingEndpoint {
		return new TrendingEndpoint({
			apiKey: this.apiKey,
			client: this.clientV3,
		});
	}

	public search(options?: MovieDBNS.Options.V3.Search): SearchEndpoint {
		return new SearchEndpoint({
			apiKey: this.apiKey,
			client: this.clientV3,
			language: options?.language ?? this.language,
		});
	}

	public reviews(): ReviewsEndpoint {
		return new ReviewsEndpoint({
			apiKey: this.apiKey,
			client: this.clientV3,
		});
	}

	public tvShow(options?: MovieDBNS.Options.V3.TVShow): TVShowEndpoint {
		return new TVShowEndpoint({
			apiKey: this.apiKey,
			client: this.clientV3,
			language: options?.language ?? this.language,
			tvID: options?.tvID,
			sessionID: this.sessionID,
		});
	}

	public tvSeasons(options?: MovieDBNS.Options.V3.TVSeasons): TVSeasonsEndpoint {
		return new TVSeasonsEndpoint({
			apiKey: this.apiKey,
			client: this.clientV3,
			language: options?.language ?? this.language,
			seasonNumber: options?.seasonNumber,
			tvID: options?.tvID,
		});
	}

	public tvEpisodes(options?: MovieDBNS.Options.V3.TVEpisodes): TVEpisodesEndpoint {
		return new TVEpisodesEndpoint({
			apiKey: this.apiKey,
			client: this.clientV3,
			language: options?.language ?? this.language,
			episodeNumber: options?.episodeNumber,
			seasonNumber: options?.seasonNumber,
			tvID: options?.tvID,
		});
	}

	public tvEpisodeGroups(options?: MovieDBNS.Options.V3.TVEpisodeGroups): TVEpisodeGroupsEndpoint {
		return new TVEpisodeGroupsEndpoint({
			apiKey: this.apiKey,
			client: this.clientV3,
			language: options?.language ?? this.language,
			id: options?.id,
		});
	}
}

// For CommonJS default export support
module.exports = MovieDB;
module.exports.default = MovieDB;
