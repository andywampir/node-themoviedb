/* eslint-disable camelcase */
import { Movie } from '../common';

// Options
interface CommonParameters {
  listID?: string | number;
}

export interface ListsDetailsOptions extends CommonParameters {
  language?: string;
}

export interface ListsItemStatusOptions extends CommonParameters {
  movieID: number;
}

export interface ListsCreateOptions extends CommonParameters {
  sessionID?: string;
  name?: string;
  description?: string;
  language?: string;
}

export interface ListsAddMovieOptions extends CommonParameters {
  sessionID?: string;
  mediaID: number;
}

export interface ListsRemoveMovieOptions extends CommonParameters {
  sessionID?: string;
  mediaID: number;
}

export interface ListsClearOptions extends CommonParameters {
  sessionID?: string;
  confirm: boolean;
}

export interface ListsRemoveOptions extends CommonParameters {
  sessionID?: string;
}

// Return Types
export interface ListsReturnType {
  details?: ListsDetails[];
  itemStatus?: ListsItemStatus[];
  create?: ListsCreate[];
  addMovie?: ListsAddMovie[];
  removeMovie?: ListsRemoveMovie[];
  clear?: ListsClear[];
  delete?: ListsDelete[];
}

interface CommonReturnType {
  status_message: string;
  status_code: string;
}

interface ListsDetails {
  created_by: string;
  description: string;
  favorite_count: number;
  id: string;
  item_count: number;
  iso_639_1: string;
  name: string;
  poster_path: string | null;
  items: Movie[];
}

interface ListsItemStatus {
  id: number;
  item_present: boolean;
}

interface ListsCreate extends CommonReturnType {
  success: boolean;
  list_id: number;
}

interface ListsAddMovie extends CommonReturnType {}
interface ListsRemoveMovie extends CommonReturnType {}
interface ListsClear extends CommonReturnType {}
interface ListsDelete extends CommonReturnType {}
