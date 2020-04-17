/* eslint-disable camelcase */
import { Movie } from '../common';

// Options
interface CommonParameters {
  listID?: string | number;
}

export interface ListDetailsOptions extends CommonParameters {
  language?: string;
}

export interface ListItemStatusOptions extends CommonParameters {
  movieID: number;
}

export interface ListCreateOptions extends CommonParameters {
  sessionID?: string;
  name?: string;
  description?: string;
  language?: string;
}

export interface ListAddMovieOptions extends CommonParameters {
  sessionID?: string;
  mediaID: number;
}

export interface ListRemoveMovieOptions extends CommonParameters {
  sessionID?: string;
  mediaID: number;
}

export interface ListClearOptions extends CommonParameters {
  sessionID?: string;
  confirm: boolean;
}

export interface ListRemoveOptions extends CommonParameters {
  sessionID?: string;
}

// Return Types
export interface ListReturnType {
  details?: ListDetails[];
  itemStatus?: ListItemStatus[];
  create?: ListCreate[];
  addMovie?: ListAddMovie[];
  removeMovie?: ListRemoveMovie[];
  clear?: ListClear[];
  delete?: ListDelete[];
}

interface CommonReturnType {
  status_message: string;
  status_code: string;
}

interface ListDetails {
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

interface ListItemStatus {
  id: number;
  item_present: boolean;
}

interface ListCreate extends CommonReturnType {
  success: boolean;
  list_id: number;
}

interface ListAddMovie extends CommonReturnType {}
interface ListRemoveMovie extends CommonReturnType {}
interface ListClear extends CommonReturnType {}
interface ListDelete extends CommonReturnType {}
