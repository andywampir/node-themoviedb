export type RequestType = 'POST' | 'GET' | 'DELETE';

export interface RequestOption {
  type: RequestType;
  endpoint: string;
  name: string;
}

export interface CreatedRequestOptions {
  query?: Record<string, unknown>;
  body?: Record<string, unknown>;
  pathParameters?: Record<string, string | number | boolean | null | undefined>;
}
