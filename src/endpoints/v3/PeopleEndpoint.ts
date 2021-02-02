import Executor from '../../utils/Executor';
import client from '../../utils/clients';

import {
	PeopleChangesOptions, PeopleCombinedCreditsOptions,
	PeopleDetailsOptions, PeopleExternalIDsOptions,
	PeopleImagesOptions, PeopleLatestOptions,
	PeopleMovieCreditsOptions, PeoplePopularOptions,
	PeopleReturnType, PeopleTVCreditsOptions,
	PeopleTaggedImagesOptions, PeopleTranslationsOptions,
	PeopleConstructorOptions,
} from '../../interfaces/v3/people';
import { RequiredParameterError } from '../../errors';

export default class PeopleEndpoint extends Executor<PeopleReturnType> {
	private readonly apiKey: string;
	private readonly language: string;
	private readonly personID?: number;

	public constructor(options: PeopleConstructorOptions) {
		super(client);

		this.apiKey = options.apiKey;
		this.language = options.language;
		this.personID = options.personID;
	}

	public details(options: PeopleDetailsOptions): PeopleEndpoint {
		if (!options.personID || !this.personID)
			throw new RequiredParameterError('personID');

		this.addToExecutionList(
			'details',
			{
				uri: `person/${options.personID ?? this.personID}`,
				searchParams: {
					api_key: this.apiKey,
					language: options.language ?? this.language,
					append_to_response: options.appendToResponse ?? null,
				},
			},
		);

		return this;
	}

	public changes(options: PeopleChangesOptions): PeopleEndpoint {
		if (!options.personID || !this.personID)
			throw new RequiredParameterError('personID');

		this.addToExecutionList(
			'changes',
			{
				uri: `person/${options.personID ?? this.personID}/changes`,
				searchParams: {
					api_key: this.apiKey,
					end_date: options.endDate ?? null,
					page: options.page ?? 1,
					start_date: options.startDate ?? null,
				},
			},
		);

		return this;
	}

	public movieCredits(options: PeopleMovieCreditsOptions): PeopleEndpoint {
		if (!options.personID || !this.personID)
			throw new RequiredParameterError('personID');

		this.addToExecutionList(
			'movieCredits',
			{
				uri: `person/${options.personID ?? this.personID}/movie_credits`,
				searchParams: {
					api_key: this.apiKey,
					language: options.language ?? this.language,
				},
			},
		);

		return this;
	}

	public tvCredits(options: PeopleTVCreditsOptions): PeopleEndpoint {
		if (!options.personID || !this.personID)
			throw new RequiredParameterError('personID');

		this.addToExecutionList(
			'tvCredits',
			{
				uri: `person/${options.personID ?? this.personID}/tv_credits`,
				searchParams: {
					api_key: this.apiKey,
					language: options.language ?? this.language,
				},
			},
		);

		return this;
	}

	public combinedCredits(options: PeopleCombinedCreditsOptions): PeopleEndpoint {
		if (!options.personID || !this.personID)
			throw new RequiredParameterError('personID');

		this.addToExecutionList(
			'combinedCredits',
			{
				uri: `person/${options.personID ?? this.personID}/combined_credits`,
				searchParams: {
					api_key: this.apiKey,
					language: options.language ?? this.language,
				},
			},
		);

		return this;
	}

	public externalIDs(options: PeopleExternalIDsOptions): PeopleEndpoint {
		if (!options.personID || !this.personID)
			throw new RequiredParameterError('personID');

		this.addToExecutionList(
			'externalIDs',
			{
				uri: `person/${options.personID ?? this.personID}/external_ids`,
				searchParams: {
					api_key: this.apiKey,
					language: options.language ?? this.language,
				},
			},
		);

		return this;
	}

	public images(options: PeopleImagesOptions): PeopleEndpoint {
		if (!options.personID || !this.personID)
			throw new RequiredParameterError('personID');

		this.addToExecutionList(
			'images',
			{
				uri: `person/${options.personID ?? this.personID}/images`,
				searchParams: { api_key: this.apiKey },
			},
		);

		return this;
	}

	public taggedImages(options: PeopleTaggedImagesOptions): PeopleEndpoint {
		if (!options.personID || !this.personID)
			throw new RequiredParameterError('personID');

		this.addToExecutionList(
			'taggedImages',
			{
				uri: `person/${options.personID ?? this.personID}/tagged_images`,
				searchParams: {
					api_key: this.apiKey,
					language: options.language ?? this.language,
					page: options.page ?? 1,
				},
			},
		);

		return this;
	}

	public translations(options: PeopleTranslationsOptions): PeopleEndpoint {
		if (!options.personID || !this.personID)
			throw new RequiredParameterError('personID');

		this.addToExecutionList(
			'translations',
			{
				uri: `person/${options.personID ?? this.personID}/translations`,
				searchParams: {
					api_key: this.apiKey,
					language: options.language ?? this.language,
				},
			},
		);

		return this;
	}

	public latest(options: PeopleLatestOptions): PeopleEndpoint {
		this.addToExecutionList(
			'latest',
			{
				uri: 'person/latest',
				searchParams: {
					api_key: this.apiKey,
					language: options.language ?? this.language,
				},
			},
		);

		return this;
	}

	public popular(options: PeoplePopularOptions): PeopleEndpoint {
		this.addToExecutionList(
			'popular',
			{
				uri: 'person/popular',
				searchParams: {
					api_key: this.apiKey,
					language: options.language ?? this.language,
					page: options.page ?? 1,
				},
			},
		);

		return this;
	}
}
