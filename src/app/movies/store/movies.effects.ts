import * as moviesAction from '../store/movies.actions';
import * as fromApp from '../../store/app.reducer';
import {Store} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, map, switchMap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable()
export class MoviesEffects {
  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions,
    private http: HttpClient,
  ) {
  }

  @Effect()
  fetchMovies = this.actions$.pipe(
    ofType(moviesAction.MOVIES_FETCH_REQUEST),
    switchMap((fetchAllMovies: moviesAction.MoviesFetchItems) => {
        return this.http.get('https://api.themoviedb.org/3/movie/now_playing')
          .pipe(
            // map((res: IMovies) => new MoviesModel(res)),
            map(res => new moviesAction.MoviesSaveItems(res)),
            catchError(errorRes => {
              return errorRes;
            })
          );
      }
    )
  );

  @Effect()
  fetchMovieItem = this.actions$.pipe(
    ofType(moviesAction.MOVIES_DETAIL_REQUEST),
    switchMap((getMovieItem: moviesAction.MoviesGetDetailItem) => {
        return this.http.get(`https://api.themoviedb.org/3/movie/${getMovieItem.payload}`)
          .pipe(
            map(res => new moviesAction.MoviesSaveDetailItem(res)),
            catchError(errorRes => {
              return errorRes;
            })
          );
      }
    )
  );
}

