import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as moviesActions from './store/movies.actions';
import {Subscription} from 'rxjs';
import {IMovie, IMovies, MovieItem} from './movies.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  movies: IMovie[] = [];
  loading = false;

  private moviesSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new moviesActions.MoviesFetchItems());
    this.moviesSub = this.store.select('movies').subscribe(res => {
      console.log(res);
      this.movies = res.results.map(movie => new MovieItem(movie));
      console.log(this.movies);
      this.loading = res.loading;
    });
  }

  ngOnDestroy() {
    this.moviesSub.unsubscribe();
  }

}
