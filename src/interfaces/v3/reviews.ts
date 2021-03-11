import type { IClient } from '../../utils/Client';

namespace ReviewsEndpointNS {
	export interface Class {
		details(reviewID: number): Promise<Results.Details>;
	}

	export namespace Options {
		export interface Constructor {
			client: IClient;
		}
	}

	export namespace Results {
		export type Details = Types.Details;
	}

	namespace Types {
		export interface Details {
			id: string;
			author: string;
			content: string;
			iso_639_1: string;
			media_id: number;
			media_title: string;
			media_type: string;
			url: string;
		}
	}
}

export default ReviewsEndpointNS;
