import {ActionReducerMap} from '@ngrx/store';

import * as fromTvShow from '../tv-show/store/tv-show.reducer';
import * as fromMovie from '../movies/store/movies.reducer';
import {TvShowsModel} from '../tv-show/tv-shows.model';
import {IMovies} from '../movies/movies.model';

export interface AppState {
  tvShow: TvShowsModel;
  movies: IMovies;
}

export const appReducer: ActionReducerMap<AppState> = {
  tvShow: fromTvShow.tvShowReducer,
  movies: fromMovie.moviesReducer,
};
