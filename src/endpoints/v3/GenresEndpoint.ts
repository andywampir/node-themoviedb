import Executor from '../../utils/Executor';
import client from '../../utils/clients';

import {
	GenresReturnType, GenresConstructorOptions,
} from '../../interfaces/v3/genres';

export default class GenresEndpoint extends Executor<GenresReturnType> {
	private readonly apiKey: string;
	private readonly language: string;

	public constructor(options: GenresConstructorOptions) {
		super(client);

		this.apiKey = options.apiKey;
		this.language = options.language;
	}

	public movie(language?: string): GenresEndpoint {
		this.addToExecutionList(
			'movie',
			{
				uri: 'genre/movie/list',
				searchParams: {
					api_key: this.apiKey,
					language: language ?? this.language,
				},
			},
		);

		return this;
	}

	public tv(language?: string): GenresEndpoint {
		this.addToExecutionList(
			'tv',
			{
				uri: 'genre/tv/list',
				searchParams: {
					api_key: this.apiKey,
					language: language ?? this.language,
				},
			},
		);

		return this;
	}
}
