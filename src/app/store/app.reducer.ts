import {ActionReducerMap} from '@ngrx/store';

import * as fromTvShow from '../tv-show/store/tv-show.reducer';
import {TvShowsModel} from '../tv-show/tv-shows.model';

export interface AppState {
  tvShow: TvShowsModel;
}

export const appReducer: ActionReducerMap<AppState> = {
  tvShow: fromTvShow.tvShowReducer,
};
