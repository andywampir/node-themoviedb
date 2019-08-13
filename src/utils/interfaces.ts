export type RequestType = 'POST' | 'GET' | 'DELETE';

export interface RequestOption {
  type: RequestType;
  endpoint: string;
  name: string;
}

export interface CreatedRequestOptions {
  query?: object;
  body?: object;
  pathParameters?: object;
}
