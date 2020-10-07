import {Component, OnInit} from '@angular/core';
import {TvShowsModel} from '../tv-shows.model';
import {VideoItem} from '../../shared/video-item';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as tvShowActions from '../store/tv-show.actions';
import * as tvShowsActions from '../store/tv-show.actions';

@Component({
  selector: 'app-tv-show-content',
  templateUrl: './tv-show-content.component.html',
  styleUrls: ['./tv-show-content.component.css']
})
export class TvShowContentComponent implements OnInit {
  public tvShowResponse?: TvShowsModel;
  public tvShowItems?: VideoItem[];
  public loading = false;

  constructor(
    private store: Store<fromApp.AppState>,
  ) {
  }

  public switchSource(param: string) {
    this.store.dispatch(new tvShowActions.TVShowFetchItems(param));
  }

  ngOnInit() {
    this.store.dispatch(new tvShowsActions.TVShowFetchItems());

    this.store.select('tvShow').subscribe((tvShows: TvShowsModel) => {
      this.tvShowResponse = tvShows;
      this.tvShowItems = tvShows.results;
    });
  }
}
