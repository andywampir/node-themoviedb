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
}

// For CommonJS default export support
module.exports = MovieDB;
module.exports.default = MovieDB;
