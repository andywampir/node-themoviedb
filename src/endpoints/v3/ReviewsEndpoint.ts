import ReviewsEndpointNS from '../../interfaces/v3/reviews';

import type { IClient } from '../../utils/Client';

export default class ReviewsEndpoint implements ReviewsEndpointNS.Class {
	private readonly apiKey: string;
	private readonly client: IClient;

	public constructor(options: ReviewsEndpointNS.Options.Constructor) {
		this.apiKey = options.apiKey;
		this.client = options.client;
	}

	public async details(reviewID: number): Promise<ReviewsEndpointNS.Results.Details> {
		return this.client.get(
			`review/${reviewID}`,
			{ searchParams: { api_key: this.apiKey } },
		);
	}
}
