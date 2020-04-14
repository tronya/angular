import {Action} from '@ngrx/store';
import {VideoItem} from '../../shared/video-item';

export const TVSHOWS_FETCH_ITEMS_START = '[TV SHOW] TVSHOWS_FETCH_ITEMS';
export const TVSHOWS_FETCH_ITEMS_SUCCESS = '[TV SHOW] TVSHOWS_FETCH_ITEMS_SUCCESS';
export const TVSHOWS_FETCH_ITEMS_ERROR = '[TV SHOW] TVSHOWS_FETCH_ITEMS_ERROR';

export const TVSHOW_DETAIL_START = '[TV SHOW] TVSHOW_GET';
export const TVSHOW_DETAIL_SUCCESS = '[TV SHOW] TVSHOW_DETAIL_SUCCESS';
export const TVSHOW_DETAIL_ERROR = '[TV SHOW] TVSHOW_DETAIL_ERROR';
export const TVSHOW_LOADING = '[TV SHOW] TVSHOW_LOADING';

export class TVShowFetchItems implements Action {
  readonly type = TVSHOWS_FETCH_ITEMS_START;

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

export class GetTvShowDetail implements Action {
  readonly type = TVSHOW_DETAIL_START;

  constructor(public payload: string) {
  }
}

export type TVSHowsActionsTypes = TVShowFetchItems | TVShowErrorItems | GetTvShowDetail | TVShowSaveItems;

