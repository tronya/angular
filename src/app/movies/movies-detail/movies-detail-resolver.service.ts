import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as MoviesActions from '../../movies/store/movies.actions';
import {Actions, ofType} from '@ngrx/effects';
import {map, switchMap, take} from 'rxjs/operators';
import {MoviesGetDetailItem} from '../store/movies.actions';
import {VideoItem} from '../../shared/video-item';


@Injectable({providedIn: 'root'})
export class MoviesDetailResolverService implements Resolve<VideoItem> {
  constructor(
    private store: Store<fromApp.AppState>,
    private action$: Actions
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<VideoItem> | Promise<VideoItem> | VideoItem | any {
    return this.store.select('movies').pipe(
      take(1),
      map(moviesState => {
        return moviesState;
      }),
      switchMap(movies => {
        if (movies) {
          this.store.dispatch(new MoviesGetDetailItem(route.params.id));
          return this.action$.pipe(
            ofType(MoviesActions.MOVIES_DETAIL_SAVE),
            take(1)
          );
        } else {
          return of(movies);
        }
      })
    );
  }
}
