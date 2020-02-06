import { TvShowsModel } from '../tv-shows.model';
import * as TvShowsActions from './tv-show.actions';


const initialState = {
  page: 0,
  totalPage: 0,
  results: [],
  totalResults: 0,
  loading: false,
  error: null
};

export function tvShowReducer(
  state: TvShowsModel = initialState,
  action: TvShowsActions.TVSHowsActionsTypes) {

  switch (action.type) {
    case TvShowsActions.TVSHOWS_FETCH_ITEMS_START:
      return {
        ...state,
        loading: true,
        error: null
      };

    case TvShowsActions.TVSHOWS_FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false
      };

    case TvShowsActions.TVSHOWS_FETCH_ITEMS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }

  return state;
}
