import PeopleEndpointNS from '../../interfaces/v3/people';
import { RequiredParameterError } from '../../errors';

import type { IClient } from '../../utils/client';

export default class PeopleEndpoint implements PeopleEndpointNS.Class {
	private readonly language: string;
	private readonly client: IClient;
	private readonly personID?: number;

	public constructor(options: PeopleEndpointNS.Options.Constructor) {
		this.language = options.language;
		this.personID = options.personID;
		this.client = options.client;
	}

	public async details(options: PeopleEndpointNS.Options.Details): Promise<PeopleEndpointNS.Results.Details> {
		if (!options.personID || !this.personID)
			throw new RequiredParameterError('personID');

		return this.client.get(
			`person/${options.personID ?? this.personID}`,
			{
				searchParams: {
					language: options.language ?? this.language,
					append_to_response: options.appendToResponse,
				},
			},
		);
	}

	public async changes(options: PeopleEndpointNS.Options.Changes): Promise<PeopleEndpointNS.Results.Changes> {
		if (!options.personID || !this.personID)
			throw new RequiredParameterError('personID');

		return this.client.get(
			`person/${options.personID ?? this.personID}/changes`,
			{
				searchParams: {
					start_date: options.startDate,
					end_date: options.endDate,
					page: options.page ?? 1,
				},
			},
		);
	}

	public async movieCredits(
		options: PeopleEndpointNS.Options.MovieCredits,
	): Promise<PeopleEndpointNS.Results.MovieCredits> {
		if (!options.personID || !this.personID)
			throw new RequiredParameterError('personID');

		return this.client.get(
			`person/${options.personID ?? this.personID}/movie_credits`,
			{ searchParams: { language: options.language ?? this.language } },
		);
	}

	public async tvCredits(options: PeopleEndpointNS.Options.TVCredits): Promise<PeopleEndpointNS.Results.TVCredits> {
		if (!options.personID || !this.personID)
			throw new RequiredParameterError('personID');

		return this.client.get(
			`person/${options.personID ?? this.personID}/tv_credits`,
			{ searchParams: { language: options.language ?? this.language } },
		);
	}

	public async combinedCredits(
		options: PeopleEndpointNS.Options.CombinedCredits,
	): Promise<PeopleEndpointNS.Results.CombinedCredits> {
		if (!options.personID || !this.personID)
			throw new RequiredParameterError('personID');

		return this.client.get(
			`persont/${options.personID ?? this.personID}/combined_credits`,
			{ searchParams: { language: options.language ?? this.language } },
		);
	}

	public async externalIDs(
		options: PeopleEndpointNS.Options.ExternalIDs,
	): Promise<PeopleEndpointNS.Results.ExternalIDs> {
		if (!options.personID || !this.personID)
			throw new RequiredParameterError('personID');

		return this.client.get(
			`person/${options.personID ?? this.personID}/external_ids`,
			{ searchParams: { language: options.language ?? this.language } },
		);
	}

	public async images(options: PeopleEndpointNS.Options.Images): Promise<PeopleEndpointNS.Results.Images> {
		if (!options.personID || !this.personID)
			throw new RequiredParameterError('personID');

		return this.client.get(`person/${options.personID ?? this.personID}/images`);
	}

	public async taggedImages(
		options: PeopleEndpointNS.Options.TaggedImages,
	): Promise<PeopleEndpointNS.Results.TaggedImages> {
		if (!options.personID || !this.personID)
			throw new RequiredParameterError('personID');

		return this.client.get(
			`person/${options.personID ?? this.personID}/tagged_images`,
			{
				searchParams: {
					language: options.language ?? this.language,
					page: options.page ?? 1,
				},
			},
		);
	}

	public async translations(
		options: PeopleEndpointNS.Options.Translations,
	): Promise<PeopleEndpointNS.Results.Translations> {
		if (!options.personID || !this.personID)
			throw new RequiredParameterError('personID');

		return this.client.get(
			`person/${options.personID ?? this.personID}/translations`,
			{ searchParams: { language: options.language ?? this.language } },
		);
	}

	public async latest(options: PeopleEndpointNS.Options.Latest): Promise<PeopleEndpointNS.Results.Latest> {
		return this.client.get(
			'person/latest',
			{ searchParams: { language: options.language ?? this.language } },
		);
	}

	public async popular(options: PeopleEndpointNS.Options.Popular): Promise<PeopleEndpointNS.Results.Popular> {
		return this.client.get(
			'person/popular',
			{
				searchParams: {
					language: options.language ?? this.language,
					page: options.page ?? 1,
				},
			},
		);
	}
}
