import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { TvShowsModel } from './tv-shows.model';
import { TvShowDetail } from './tv-show-detail/tv-show-detail-model';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as tvShowActions from './store/tv-show.actions';


@Injectable({ providedIn: 'root' })

export class TvShowService {
  constructor(
    private http: HttpClient,
    private store: Store<fromApp.AppState>) {
  }

  getTvShows() {

    // this.store.dispatch(new tvShowActions.GetAllTvShows());

    // return this.http.get('https://api.themoviedb.org/3/tv/popular?api_key=' + environment.TheMovieDBKey)
    //   .pipe(
    //     // map((res: TvShowsModel) => ({
    //     //   ...res,
    //     //   results: res.results.map((show: TvShowModel) => new TvShowModel(show))
    //     // })),
    //     map(res => new TvShowsModel(res)),
    //     catchError(e => throwError(e))
    //   );
  }

  getTvShowDetail(tvShowId: number) {
    return this.http.get(`https://api.themoviedb.org/3/tv/${tvShowId}?api_key=` + environment.TheMovieDBKey)
      .pipe(
        map(detail => {
          return new TvShowDetail(detail);
        }),
        catchError(e => throwError(e))
      );
  }

}
