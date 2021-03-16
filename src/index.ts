import Client, { IClient } from './utils/client';

import AccountEndpoint from './endpoints/v3/account.endpoint';
import AuthentificationEndpoint from './endpoints/v3/authentication.endpoint';
import CertificationsEndpoint from './endpoints/v3/certifications.endpoint';
import ChangesEndpoint from './endpoints/v3/changes.endpoint';
import CollectionsEndpoint from './endpoints/v3/collections.endpoint';
import CompaniesEndpoint from './endpoints/v3/companies.endpoint';
import ConfigurationEndpoint from './endpoints/v3/configuration.endpoint';
import CreditsEndpoint from './endpoints/v3/credits.endpoint';
import DiscoverEndpoint from './endpoints/v3/discover.endpoint';
import FindEndpoint from './endpoints/v3/find.endpoints';
import GenresEndpoint from './endpoints/v3/genres.endpoint';
import GuestSessionEndpoint from './endpoints/v3/guest-session.endpoint';
import KeywordsEndpoint from './endpoints/v3/keywords.endpoint';
import ListsEndpoint from './endpoints/v3/lists.endpoint';
import MoviesEndpoint from './endpoints/v3/movies.endpoint';
import NetworksEndpoint from './endpoints/v3/networks.endpoint';
import PeopleEndpoint from './endpoints/v3/people.endpoint';
import TrendingEndpoint from './endpoints/v3/trending.endpoint';
import SearchEndpoint from './endpoints/v3/search.endpoint';
import ReviewsEndpoint from './endpoints/v3/reviews.endpoint';
import TVShowEndpoint from './endpoints/v3/tv-show.endpoint';
import TVSeasonsEndpoint from './endpoints/v3/tv-seasons.endpoint';
import TVEpisodesEndpoint from './endpoints/v3/tv-episodes.endpoint';
import TVEpisodeGroupsEndpoint from './endpoints/v3/tv-episode-groups.endpoint';

import { RequiredParameterError } from './errors';

import MovieDBNS from './interfaces/moviedb';

export default class MovieDB implements MovieDBNS.Class {
	private language: string;
	private sessionID?: string;
	private readonly clientV3: IClient;
	private readonly clientV4: IClient;

	public constructor(options: MovieDBNS.Options.Constructor) {
		if (!options.accessToken)
			throw new RequiredParameterError('accessToken');

		this.language = options.language ?? 'en-US';
		this.clientV3 = new Client(options.accessToken, 3);
		this.clientV4 = new Client(options.accessToken, 4);
	}

	public setAccessToken(accessToken: string): void {
		if (!accessToken || typeof accessToken !== 'string')
			throw new RequiredParameterError('accessToken');

		this.clientV3.recreate(accessToken);
		this.clientV4.recreate(accessToken);
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
			sessionID: options?.sessionID ?? this.sessionID,
			language: options?.language ?? this.language,
			userID: options?.userID,
			client: this.clientV3,
		});
	}

	public authentication(): AuthentificationEndpoint {
		return new AuthentificationEndpoint({ client: this.clientV3 });
	}

	public certifications(): CertificationsEndpoint {
		return new CertificationsEndpoint({ client: this.clientV3 });
	}

	public changes(): ChangesEndpoint {
		return new ChangesEndpoint({ client: this.clientV3 });
	}

	public collections(options?: MovieDBNS.Options.V3.Collections): CollectionsEndpoint {
		return new CollectionsEndpoint({
			language: options?.language ?? this.language,
			collectionID: options?.collectionID,
			client: this.clientV3,
		});
	}

	public companies(options?: MovieDBNS.Options.V3.Companies): CompaniesEndpoint {
		return new CompaniesEndpoint({
			client: this.clientV3,
			companyID: options?.companyID,
		});
	}

	public configuration(): ConfigurationEndpoint {
		return new ConfigurationEndpoint({ client: this.clientV3 });
	}

	public credits(options?: MovieDBNS.Options.V3.Credits): CreditsEndpoint {
		return new CreditsEndpoint({
			client: this.clientV3,
			creditID: options?.creditID,
		});
	}

	public discover(options?: MovieDBNS.Options.V3.Discover): DiscoverEndpoint {
		return new DiscoverEndpoint({
			client: this.clientV3,
			language: options?.language ?? this.language,
		});
	}

	public find(options?: MovieDBNS.Options.V3.Find): FindEndpoint {
		return new FindEndpoint({
			client: this.clientV3,
			language: options?.language ?? this.language,
		});
	}

	public genres(options?: MovieDBNS.Options.V3.Genres): GenresEndpoint {
		return new GenresEndpoint({
			client: this.clientV3,
			language: options?.language ?? this.language,
		});
	}

	public guestSession(options?: MovieDBNS.Options.V3.GuestSessions): GuestSessionEndpoint {
		return new GuestSessionEndpoint({
			client: this.clientV3,
			language: options?.language ?? this.language,
			guestSessionID: options?.guestSessionID,
		});
	}

	public keywords(options?: MovieDBNS.Options.V3.Keywords): KeywordsEndpoint {
		return new KeywordsEndpoint({
			client: this.clientV3,
			language: options?.language ?? this.language,
			keywordID: options?.keywordID,
		});
	}

	public lists(options?: MovieDBNS.Options.V3.Lists): ListsEndpoint {
		return new ListsEndpoint({
			client: this.clientV3,
			language: options?.language ?? this.language,
			listID: options?.listID,
			sessionID: options?.sessionID ?? this.sessionID,
		});
	}

	public movies(options?: MovieDBNS.Options.V3.Movies): MoviesEndpoint {
		return new MoviesEndpoint({
			client: this.clientV3,
			language: options?.language ?? this.language,
			movieID: options?.movieID,
		});
	}

	public networks(options?: MovieDBNS.Options.V3.Networks): NetworksEndpoint {
		return new NetworksEndpoint({
			client: this.clientV3,
			networkID: options?.networkID,
		});
	}

	public people(options?: MovieDBNS.Options.V3.People): PeopleEndpoint {
		return new PeopleEndpoint({
			client: this.clientV3,
			language: options?.language ?? this.language,
			personID: options?.personID,
		});
	}

	public trending(): TrendingEndpoint {
		return new TrendingEndpoint({ client: this.clientV3 });
	}

	public search(options?: MovieDBNS.Options.V3.Search): SearchEndpoint {
		return new SearchEndpoint({
			client: this.clientV3,
			language: options?.language ?? this.language,
		});
	}

	public reviews(): ReviewsEndpoint {
		return new ReviewsEndpoint({ client: this.clientV3 });
	}

	public tvShow(options?: MovieDBNS.Options.V3.TVShow): TVShowEndpoint {
		return new TVShowEndpoint({
			client: this.clientV3,
			language: options?.language ?? this.language,
			tvID: options?.tvID,
			sessionID: this.sessionID,
		});
	}

	public tvSeasons(options?: MovieDBNS.Options.V3.TVSeasons): TVSeasonsEndpoint {
		return new TVSeasonsEndpoint({
			client: this.clientV3,
			language: options?.language ?? this.language,
			seasonNumber: options?.seasonNumber,
			tvID: options?.tvID,
		});
	}

	public tvEpisodes(options?: MovieDBNS.Options.V3.TVEpisodes): TVEpisodesEndpoint {
		return new TVEpisodesEndpoint({
			client: this.clientV3,
			language: options?.language ?? this.language,
			episodeNumber: options?.episodeNumber,
			seasonNumber: options?.seasonNumber,
			tvID: options?.tvID,
		});
	}

	public tvEpisodeGroups(options?: MovieDBNS.Options.V3.TVEpisodeGroups): TVEpisodeGroupsEndpoint {
		return new TVEpisodeGroupsEndpoint({
			client: this.clientV3,
			language: options?.language ?? this.language,
			id: options?.id,
		});
	}
}

// For CommonJS default export support
module.exports = MovieDB;
module.exports.default = MovieDB;
