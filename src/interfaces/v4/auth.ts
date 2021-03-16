import type { IClient } from '../../utils/client';

namespace AuthEndpointNS {
	export interface Class {
		createRequestToken(redirectTo: string): Promise<Results.CreateRequestToken>;
		createAccessToken(requestToken: string): Promise<Results.CreateAccessToken>;
		deleteAccessToken(accessToken: string): Promise<Results.DeleteAccessToken>;
	}

	export namespace Options {
		export interface Constructor {
			client: IClient;
		}
	}

	export namespace Results {
		export type CreateRequestToken = Types.CreateRequestToken;
		export type CreateAccessToken = Types.CreateAccessToken;
		export type DeleteAccessToken = Types.DeleteAccessToken;
	}

	namespace Types {
		export interface CreateRequestToken {
			status_message: string;
			request_token: string;
			success: true;
			status_code: number;
		}

		export interface CreateAccessToken {
			account_id: string;
			access_token: string;
			success: true;
			status_message: string;
			status_code: number;
		}

		export interface DeleteAccessToken {
			status_message: string;
			success: true;
			status_code: number;
		}
	}
}

export default AuthEndpointNS;
