import Executor from '../../utils/Executor';
import client from '../../utils/clients';

import {
	GuestSessionsReturnType, GuestSessionsConstructorOptions,
	GuestSessionsRatedMoviesOptions, GuestSessionsRatedTVShowsOptions,
	GuestSessionsRatedTVEpisodesOptions,
} from '../../interfaces/v3/guestSessions';
import { RequiredParameterError } from '../../errors';

export default class GuestSessionEndpoint extends Executor<GuestSessionsReturnType> {
	private readonly apiKey: string;
	private readonly language: string;
	private readonly guestSessionID?: string;

	public constructor(options: GuestSessionsConstructorOptions) {
		super(client);

		this.apiKey = options.apiKey;
		this.language = options.language;
		this.guestSessionID = options.guestSessionID;
	}

	public ratedMovies(options?: GuestSessionsRatedMoviesOptions): GuestSessionEndpoint {
		if (!options?.guestSessionID && !this.guestSessionID)
			throw new RequiredParameterError('guestSessionID');

		this.addToExecutionList(
			'ratedMovies',
			{
				uri: `guest_session/${options?.guestSessionID ?? this.guestSessionID}/rated/movies`,
				searchParams: {
					api_key: this.apiKey,
					language: options?.language ?? this.language,
					sort_by: options?.sortBy ?? null,
				},
			},
		);

		return this;
	}

	public ratedTVShows(options?: GuestSessionsRatedTVShowsOptions): GuestSessionEndpoint {
		if (!options?.guestSessionID && !this.guestSessionID)
			throw new RequiredParameterError('guestSessionID');

		this.addToExecutionList(
			'ratedTVShows',
			{
				uri: `guest_session/${options?.guestSessionID ?? this.guestSessionID}/rated/tv`,
				searchParams: {
					api_key: this.apiKey,
					language: options?.language ?? this.language,
					sort_by: options?.sortBy ?? null,
				},
			},
		);

		return this;
	}

	public ratedTVEpisodes(options?: GuestSessionsRatedTVEpisodesOptions): GuestSessionEndpoint {
		if (!options?.guestSessionID && !this.guestSessionID)
			throw new RequiredParameterError('guestSessionID');

		this.addToExecutionList(
			'ratedTVShows',
			{
				uri: `guest_session/${options?.guestSessionID ?? this.guestSessionID}/rated/tv/episodes`,
				searchParams: {
					api_key: this.apiKey,
					language: options?.language ?? this.language,
					sort_by: options?.sortBy ?? null,
				},
			},
		);

		return this;
	}
}
