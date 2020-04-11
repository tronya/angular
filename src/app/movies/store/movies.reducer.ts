import * as MoviesActions from './movies.actions';
import {IMovies} from '../movies.model';


const initialState: IMovies = {
  movie_detail: null,
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
    case MoviesActions.MOVIES_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case MoviesActions.MOVIES_SAVE_REQUEST:
      return {
        ...state,
        ...action.payload,
        movie_detail: null,
        loading: false
      };

    case MoviesActions.MOVIES_DETAIL_SAVE:
      return {
        ...state,
        movie_detail: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
