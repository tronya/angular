import {Action} from '@ngrx/store';
import {VideoItem} from '../../shared/video-item';
import {SeasonModel} from '../../models/season.model';

export const TVSHOWS_FETCH_ITEMS = '[TV SHOW] TVSHOWS_FETCH_ITEMS';
export const TVSHOWS_FETCH_ITEMS_SUCCESS = '[TV SHOW] TVSHOWS_FETCH_ITEMS_SUCCESS';
export const TVSHOWS_FETCH_ITEMS_ERROR = '[TV SHOW] TVSHOWS_FETCH_ITEMS_ERROR';

export const TVSHOW_FETCH_DETAIL = '[TV SHOW] TVSHOW_FETCH_DETAIL';
export const TVSHOW_FETCH_DETAIL_SUCCESS = '[TV SHOW] TVSHOW_FETCH_DETAIL_SUCCESS';
export const TVSHOW_FETCH_DETAIL_ERROR = '[TV SHOW] TVSHOW_FETCH_DETAIL_ERROR';

export const SEASON_FETCH_DETAILS = '[TV SHOW] SEASON_FETCH_DETAILS';
export const SEASON_FETCH_DETAILS_SUCCESS = '[TV SHOW] SEASON_FETCH_DETAILS_SUCCESS';
export const SEASON_FETCH_DETAISL_ERROR = '[TV SHOW] SEASON_FETCH_DETAISL_ERROR';

// Fetch all items
export class TVShowFetchItems implements Action {
  readonly type = TVSHOWS_FETCH_ITEMS;

  constructor(public payload: string = 'popular') {
  }
}

export class TVShowSaveItems implements Action {
  readonly type = TVSHOWS_FETCH_ITEMS_SUCCESS;

  constructor(public payload: {
    page: number,
    totalPage: number,
    results: VideoItem[],
    totalResults: number
  }) {
  }
}

export class TVShowErrorItems implements Action {
  readonly type = TVSHOWS_FETCH_ITEMS_ERROR;

  constructor(public payload: string) {
  }
}


// Fetch show detail items
export class TvShowFetchDetail implements Action {
  readonly type = TVSHOW_FETCH_DETAIL;

  constructor(public payload: string) {
  }
}

export class TvShowDetailItemSave implements Action {
  readonly type = TVSHOW_FETCH_DETAIL_SUCCESS;

  constructor(public payload: VideoItem) {
  }
}

export class TvShowDetailItemError implements Action {
  readonly type = TVSHOW_FETCH_DETAIL_ERROR;

  constructor(public payload: string) {
  }
}

// Fetch seasons details
export class SeasonsFetchDetail implements Action {
  readonly type = SEASON_FETCH_DETAILS;

  constructor(public payload: {
    tv_show_id: number,
    season_number: number
  }) {
  }
}

export class SeasonsDetailsSave implements Action {
  readonly type = SEASON_FETCH_DETAILS_SUCCESS;

  constructor(public payload: SeasonModel) {
  }
}

export class SeasonDetailsError implements Action {
  readonly type = SEASON_FETCH_DETAISL_ERROR;

  constructor(public payload: string) {
  }
}

export type TVSHowsActionsTypes =
  TVShowFetchItems
  | TVShowErrorItems
  | TvShowFetchDetail
  | TVShowSaveItems
  | TvShowDetailItemSave
  | TvShowDetailItemError
  | SeasonsFetchDetail
  | SeasonsDetailsSave
  | SeasonDetailsError;

