import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as seasonsActions from '../store/tv-show.actions';
import {ActivatedRoute} from '@angular/router';
import {TvShowsModel} from '../tv-shows.model';
import {SeasonModel} from '../../models/season.model';

@Component({
  selector: 'app-tv-show-seasons',
  templateUrl: './tv-show-seasons.component.html',
  styleUrls: ['./tv-show-seasons.component.scss']
})
export class TvShowSeasonsComponent implements OnInit {
  public season$: SeasonModel;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>,
  ) {
  }

  ngOnInit() {
    const tvShowId = this.route.snapshot.paramMap.get('id');
    const seasonNumber = this.route.snapshot.paramMap.get('number');
    this.store.dispatch(new seasonsActions.SeasonsFetchDetail({tv_show_id: +tvShowId, season_number: +seasonNumber}));

    this.store.select('tvShow').subscribe((state: TvShowsModel) => {
      this.season$ = state.season;
    });
  }

}
