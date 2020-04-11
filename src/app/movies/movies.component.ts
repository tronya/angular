import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as moviesActions from './store/movies.actions';
import {Subscription} from 'rxjs';
import {VideoItem} from '../shared/video-item';

enum Direction {
  Down,
  Up = 1,
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit, OnDestroy {
  @ViewChild('moviesContainer', {static: false}) moviesContainer: any;
  faArrowCircleRight = faArrowCircleRight;
  movies: VideoItem[] = [];
  loading = false;
  scrollTop = 0;
  scrollingActive = true;

  private moviesSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new moviesActions.MoviesFetchItems());
    this.moviesSub = this.store.select('movies').subscribe(res => {
      this.movies = res.results.map(movie => new VideoItem(movie));
      this.loading = res.loading;
    });
  }

  ngOnDestroy() {
    this.moviesSub.unsubscribe();
  }

  switchSlide(direction: Direction) {
    console.log(direction);
    this.scrollingActive = false;
  }

  checkDirection(scrollValue) {
    if (scrollValue === this.scrollTop) {
      return false;
    }
    if (this.scrollingActive) {
      if (scrollValue > this.scrollTop) {
        this.switchSlide(Direction.Up);
      } else {
        this.switchSlide(Direction.Down);
      }
    }
  }

  scrollById(id: number) {
    document.getElementById(`movie_id_${id}`).scrollIntoView({block: 'center', behavior: 'smooth'});
  }

  refresh(event) {
    // this.checkDirection(event.target.scrollTop);
  }

}
