import ReviewsEndpointNS from '../../interfaces/v3/reviews';

import type { IClient } from '../../utils/client';

export default class ReviewsEndpoint implements ReviewsEndpointNS.Class {
	private readonly client: IClient;

	public constructor(options: ReviewsEndpointNS.Options.Constructor) {
		this.client = options.client;
	}

	public async details(reviewID: number): Promise<ReviewsEndpointNS.Results.Details> {
		return this.client.get(`review/${reviewID}`);
	}
}
