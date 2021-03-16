import type { IClient } from '../../utils/client';

namespace GenresEndpointNS {
	export interface Class {
		movie(): Promise<Results.Movie>;
		tv(): Promise<Results.TV>;
	}

	export namespace Options {
		export interface Constructor {
			language: string;
			client: IClient;
		}
	}

	export namespace Results {
		export type Movie = Types.Movie;
		export type TV = Types.TV;
	}

	namespace Types {
		export interface Movie {
			genres: {
				id: number;
				name: string;
			}[];
		}

		export interface TV extends Movie {}
	}
}

export default GenresEndpointNS;
