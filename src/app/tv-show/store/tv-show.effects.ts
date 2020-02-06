import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import * as tvShowAction from './tv-show.actions';
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TvShowsModel } from '../tv-shows.model';
import { of } from 'rxjs';

export const handleError = (errorRes: any) => {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return of(new tvShowAction.TVShowErrorItems(errorMessage));
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return of(new tvShowAction.TVShowErrorItems(errorMessage));
  };

@Injectable()
export class TvShowEffects {
    constructor(
        private store: Store<fromApp.AppState>,
        private actions$: Actions,
        private http: HttpClient,
    ) { }

    @Effect()
    fetchAllTvShows = this.actions$.pipe(
        ofType(tvShowAction.TVSHOWS_FETCH_ITEMS_START),
        switchMap((fetchAllShows: tvShowAction.TVShowFetchItems) => {
            return this.http.get('https://api.themoviedb.org/3/tv/popular?api_key=' + environment.TheMovieDBKey)
                .pipe(
                    map(res => new TvShowsModel(res)),
                    map(res => new tvShowAction.TVShowSaveItems(res)),
                    catchError(errorRes => {
                        return handleError(errorRes);
                    })
                );
        })
    );
}
