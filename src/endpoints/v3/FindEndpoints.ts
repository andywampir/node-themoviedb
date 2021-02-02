import Executor from '../../utils/Executor';
import client from '../../utils/clients';

import {
	FindByIDOptions, FindReturnType,
	FindConstructorOptions,
} from '../../interfaces/v3/find';
import { RequiredParameterError } from '../../errors';

export default class FindEndpoint extends Executor<FindReturnType> {
	private readonly apiKey: string;
	private readonly language: string;

	public constructor(options: FindConstructorOptions) {
		super(client);

		this.apiKey = options.apiKey;
		this.language = options.language;
	}

	public byID(options: FindByIDOptions): FindEndpoint {
		if (!options.externalID)
			throw new RequiredParameterError('externalID');
		if (!options.externalSource)
			throw new RequiredParameterError('externalSource');

		this.addToExecutionList(
			'byID',
			{
				uri: `find/${options.externalID}`,
				searchParams: {
					api_key: this.apiKey,
					language: options.language ?? this.language,
					external_source: options.externalSource,
				},
			},
		);

		return this;
	}
}
