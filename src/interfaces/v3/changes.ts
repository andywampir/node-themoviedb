import { ResultsWithPage } from '../common';

import type { IClient } from '../../utils/Client';

namespace ChangesEndpointNS {
	export interface Class {
		movie(): Promise<Results.Movie>;
		tv(): Promise<Results.TV>;
		person(): Promise<Results.Person>;
	}

	export namespace Options {
		export interface Constructor {
			apiKey: string;
			client: IClient;
		}

		export interface Movie {
			endDate?: string;
			startDate?: string;
			page?: number;
		}

		export interface TV extends Movie {}

		export interface Person extends Movie {}
	}

	export namespace Results {
		export type Movie = ResultsWithPage<Types.Movie>[];
		export type TV = ResultsWithPage<Types.TV>[];
		export type Person = ResultsWithPage<Types.Person>[];
	}

	namespace Types {
		export interface Movie {
			id: number;
			adult: boolean | null;
		}

		export interface TV extends Movie {}

		export interface Person extends Movie {}
	}
}

export default ChangesEndpointNS;
