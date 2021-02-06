import type { ResultsWithPage } from '../common';

import type { IClient } from '../../utils/Client';

namespace ChangesEndpointNS {
	export interface Class {
		movie(options?: Options.Movie): Promise<Results.Movie>;
		tv(options?: Options.TV): Promise<Results.TV>;
		person(options?: Options.Person): Promise<Results.Person>;
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
		export type Movie = ResultsWithPage<Types.Movie>;
		export type TV = ResultsWithPage<Types.TV>;
		export type Person = ResultsWithPage<Types.Person>;
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
