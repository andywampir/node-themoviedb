import type { IClient } from '../../utils/Client';

namespace ReviewsEndpointNS {
	export interface Class {
		get(reviewID: number): Promise<Results.Get>;
	}

	export namespace Options {
		export interface Constructor {
			apiKey: string;
			client: IClient;
		}
	}

	export namespace Results {
		export type Get = Types.Get;
	}

	namespace Types {
		export interface Get {
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
