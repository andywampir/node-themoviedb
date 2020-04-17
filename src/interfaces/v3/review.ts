/* eslint-disable camelcase */

// Return Types
export interface ReviewReturnType {
  get?: ReviewGet[];
}

interface ReviewGet {
  id: string;
  author: string;
  content: string;
  iso_639_1: string;
  media_id: number;
  media_title: string;
  media_type: string;
  url: string;
}
