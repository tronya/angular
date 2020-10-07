import {Actions, ofType, Effect} from '@ngrx/effects';
import {switchMap, catchError, map, tap} from 'rxjs/operators';
import * as tvShowAction from './tv-show.actions';
import * as fromApp from '../../store/app.reducer';
import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TvShowsModel} from '../tv-shows.model';
import {of} from 'rxjs';
import {VideoItem} from '../../shared/video-item';
import {SeasonModel} from '../../models/season.model';

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
  ) {
  }

  @Effect()
  fetchAllTvShows = this.actions$.pipe(
    ofType(tvShowAction.TVSHOWS_FETCH_ITEMS),
    switchMap((fetchAllShows: tvShowAction.TVShowFetchItems) => {
      return this.http.get(`https://api.themoviedb.org/3/tv/${fetchAllShows.payload}?count=2`)
        .pipe(
          map(res => new TvShowsModel(res)),
          map(res => new tvShowAction.TVShowSaveItems(res)),
          catchError(errorRes => {
            return handleError(errorRes);
          })
        );
    })
  );

  @Effect()
  fetchTvShowsDetails = this.actions$.pipe(
    ofType(tvShowAction.TVSHOW_FETCH_DETAIL),
    switchMap((fetchShowsDetails: tvShowAction.TvShowFetchDetail) => {
      return this.http.get(`https://api.themoviedb.org/3/tv/${fetchShowsDetails.payload}`)
        .pipe(
          map(res => new VideoItem(res)),
          map(res => new tvShowAction.TvShowDetailItemSave(res)),
          catchError(handleError)
        );
    })
  );

  @Effect()
  seasonDetails = this.actions$.pipe(
    ofType(tvShowAction.SEASON_FETCH_DETAILS),
    switchMap(({payload: {tv_show_id, season_number}}: tvShowAction.SeasonsFetchDetail) => {
      return this.http.get(`https://api.themoviedb.org/3/tv/${tv_show_id}/season/${season_number}`)
        .pipe(
          map(res => {
            console.log(res);
            return res;
          }),
          map(res => new SeasonModel(res)),
          map(res => new tvShowAction.SeasonsDetailsSave(res)),
          catchError(handleError)
        );
    })
  );
}
