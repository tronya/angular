import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as moviesActions from './store/movies.actions';
import {Subscription} from 'rxjs';
import {VideoItem} from '../shared/video-item';
import {animate, state, style, transition, trigger} from '@angular/animations';

interface Parameters {
  width: string;
  height: string;
  top: number | string;
  left: number | string;
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  animations: [
    trigger('appearingText', [
      state('in', style({
          transform: 'translateY(0)'
        })
      ),
      transition('void <=> *', [
        style({transform: 'translateY(100%)'}),
        animate('300ms 1s')
      ])
    ]),
    trigger('appearingTextDelay', [
      state('in', style({
          transform: 'translateY(0)'
        })
      ),
      transition('void <=> *', [
        style({transform: 'translateY(100%)'}),
        animate(600)
      ])
    ])
  ]
})

export class MoviesComponent implements OnInit, OnDestroy, AfterViewInit {
  movies: VideoItem[] = [];
  loading = false;

  public activeItem: VideoItem;
  public previousActiveItem: VideoItem;

  public activeItemParameters: Parameters;
  public animationActivated = false;

  private moviesSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new moviesActions.MoviesFetchItems());
    this.moviesSub = this.store.select('movies').subscribe(res => {
      if (res.results.length) {
        this.movies = res.results.map(movie => new VideoItem(movie));
        this.loading = res.loading;
        this.startLooping();
      }
    });
  }

  startLooping() {
    this.activeElementClick({
      target: {
        width: 0,
        height: '100%',
        left: 0,
        top: 0
      }
    });
  }

  ngAfterViewInit(): void {

  }

  activeElementClick(event: any) {
    this.activeItem = null;
    this.animationActivated = true;

    setTimeout(() => {
      this.activeItemParameters = {
        width: event.target.width + 'px',
        height: event.target.height + 'px',
        left: event.target.x + 'px',
        top: event.target.y + 'px',
      };

      this.activeItem = this.movies[0];

      setTimeout(() => {
        this.activeItemParameters = {
          width: '100%',
          height: '100%',
          top: 0,
          left: 0
        };
        const removedItem = this.movies.shift();

        setTimeout(() => {
          this.animationActivated = false;
          this.previousActiveItem = this.activeItem;
          this.movies.push(removedItem);
        }, 300);

      }, 300);

    }, 300);
  }

  ngOnDestroy() {
    this.moviesSub.unsubscribe();
  }
}
