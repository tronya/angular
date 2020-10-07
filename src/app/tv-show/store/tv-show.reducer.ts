import {TvShowsModel} from '../tv-shows.model';
import * as TvShowsActions from './tv-show.actions';


const initialState = {
  tvShowDetails: null,
  season: null,
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
    case TvShowsActions.TVSHOWS_FETCH_ITEMS:
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
    // DETAILS
    case TvShowsActions.TVSHOW_FETCH_DETAIL:
      return {
        ...state,
        loading: true
      };

    case TvShowsActions.TVSHOW_FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        tvShowDetails: action.payload,
        loading: false
      };

    case TvShowsActions.TVSHOW_FETCH_DETAIL_ERROR:
      return {
        ...state,
        tvShowDetails: null,
        error: action.payload,
        loading: false
      };

    // Seasons
    case TvShowsActions.SEASON_FETCH_DETAILS:
      return {
        ...state,
        loading: true
      };

    case TvShowsActions.SEASON_FETCH_DETAILS_SUCCESS:
      return {
        ...state,
        season: action.payload,
        loading: false
      };

    case TvShowsActions.SEASON_FETCH_DETAISL_ERROR:
      return {
        ...state,
        season: null,
        error: action.payload,
        loading: false
      };

    default:
      return state;
  }
}
