/* eslint-disable camelcase */
import { ResultsWithPage } from '../common';

// Options
interface CommonParameters {
  endDate?: string;
  startDate?: string;
  page?: number;
}

export interface ChangesMovieOptions extends CommonParameters {}
export interface ChangesTVOptions extends CommonParameters {}
export interface ChangesPersonOptions extends CommonParameters {}

// Return types
export interface ChangesReturnType {
  movie?: ResultsWithPage<ChangesMovie>[];
  tv?: ResultsWithPage<ChangesTV>[];
  person?: ResultsWithPage<ChangesPerson>[];
}

interface CommonReturnType {
  id: number;
  adult: boolean | null;
}

interface ChangesMovie extends CommonReturnType {}
interface ChangesTV extends CommonReturnType {}
interface ChangesPerson extends CommonReturnType {}
