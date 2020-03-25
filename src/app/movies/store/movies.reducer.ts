import * as MoviesActions from './movies.actions';
import * as TvShowsActions from '../../tv-show/store/tv-show.actions';
import {IMovie, IMovies} from '../movies.model';


const initialState: IMovies = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
  loading: false
};

export function moviesReducer(
  state: any = initialState,
  action: MoviesActions.MoviesActionsTypes) {

  switch (action.type) {
    case MoviesActions.MOVIES_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case MoviesActions.MOVIES_SAVE_REQUEST:
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    default:
      return state;
  }
}
