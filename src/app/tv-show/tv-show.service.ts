import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {TvShowsGetModel} from './tvShowsGet.model';
import {TvShowDetail} from './tv-show-detail/tv-show-detail-model';

@Injectable({providedIn: 'root'})

export class TvShowService {
  constructor(private http: HttpClient) {
  }

  getTvShows() {
    return this.http.get('https://api.themoviedb.org/3/tv/popular?api_key=' + environment.TheMovieDBKey)
      .pipe(
        // map((res: TvShowsGetModel) => ({
        //   ...res,
        //   results: res.results.map((show: TvShowModel) => new TvShowModel(show))
        // })),
        map(res => new TvShowsGetModel(res)),
        catchError(e => throwError(e))
      );
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
