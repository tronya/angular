import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import {VideoItem} from '../shared/video-item';


@Injectable({ providedIn: 'root' })

export class TvShowService {
  constructor(
    private http: HttpClient,
    private store: Store<fromApp.AppState>) {
  }

  getTvShowDetail(tvShowId: number) {
    return this.http.get(`https://api.themoviedb.org/3/tv/${tvShowId}?api_key=` + environment.TheMovieDBKey)
      .pipe(
        map(detail => {
          return new VideoItem(detail);
        }),
        catchError(e => throwError(e))
      );
  }

}
