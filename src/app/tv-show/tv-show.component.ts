import {Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {Subscription} from 'rxjs';
import {TvShowModel} from './tv-show.model';
import * as fromApp from '../store/app.reducer';
import {Store} from '@ngrx/store';
import * as TvShowActions from './store/tv-show.actions';
import anime from 'animejs/lib/anime.es.js';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-movies',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit, OnDestroy {
  shows: TvShowModel[] = [];
  loading = false;

  private tvShowSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new TvShowActions.TVShowFetchItems());
    this.tvShowSub = this.store.select('tvShow').subscribe(res => {
      this.shows = res.results;
      this.loading = res.loading;
    });
  }

  ngOnDestroy() {
    this.tvShowSub.unsubscribe();
  }

}
