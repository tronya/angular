import {ActionReducerMap} from '@ngrx/store';

import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromTvShow from '../tv-show/store/tv-show.reducer';
import {TvShowsModel} from '../tv-show/tv-shows.model';

export interface AppState {
  shoppingList: fromShoppingList.State;
  auth: fromAuth.State;
  tvShow: TvShowsModel;
}

export const appReducer: ActionReducerMap<AppState> = {
  shoppingList: fromShoppingList.shoppingListReducer,
  auth: fromAuth.authReducer,
  tvShow: fromTvShow.tvShowReducer,
};
