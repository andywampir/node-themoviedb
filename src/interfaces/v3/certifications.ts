/* eslint-disable @typescript-eslint/naming-convention */
import type { IClient } from '../../utils/Client';

namespace CertificationsEndpointNS {
	export interface Class {
		movie(): Promise<Results.Movie>;
		tv(): Promise<Results.TV>;
	}

	export namespace Options {
		export interface Constructor {
			apiKey: string;
			client: IClient;
		}
	}

	export namespace Results {
		export type Movie = Types.Movie;
		export type TV = Types.TV;
	}

	namespace Types {
		export interface Movie {
			certifications: Certifications;
		}

		export interface TV extends Movie {}

		interface Certifications {
			US: Certification;
			CA: Certification;
			DE: Certification;
			GB: Certification;
			AU: Certification;
			BR: Certification;
			FR: Certification;
			NZ: Certification;
			IN: Certification;
		}

		interface Certification {
			certification: string;
			meaning: string;
			order: number;
		}
	}
}

export default CertificationsEndpointNS;
