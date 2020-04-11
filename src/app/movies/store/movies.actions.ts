import {Action} from '@ngrx/store';

export const MOVIES_FETCH_REQUEST = 'MOVIES_FETCH_REQUEST';
export const MOVIES_SAVE_REQUEST = 'MOVIES_SAVE_REQUEST';
export const MOVIES_DETAIL_REQUEST = 'MOVIES_DETAIL_REQUEST';
export const MOVIES_DETAIL_SAVE = 'MOVIES_DETAIL_SAVE';

export class MoviesFetchItems implements Action {
  readonly type = MOVIES_FETCH_REQUEST;
}

export class MoviesSaveItems implements Action {
  readonly type = MOVIES_SAVE_REQUEST;

  constructor(public payload: any) {
  }
}

export class MoviesGetDetailItem implements Action {
  readonly type = MOVIES_DETAIL_REQUEST;

  constructor(public payload: number) {
  }
}

export class MoviesSaveDetailItem implements Action {
  readonly type = MOVIES_DETAIL_SAVE;

  constructor(public payload: any) {
  }
}

export type MoviesActionsTypes = MoviesFetchItems | MoviesSaveItems | MoviesGetDetailItem | MoviesSaveDetailItem;
