import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as fromApp from '../../store/app.reducer';
import * as tvShowsActions from '../store/tv-show.actions';
import {Store} from '@ngrx/store';
import {TvShowsModel} from '../tv-shows.model';
import {VideoItem} from '../../shared/video-item';

@Component({
  selector: 'app-tv-show-detail',
  templateUrl: './tv-show-detail.component.html',
  styleUrls: ['./tv-show-detail.component.scss']
})
export class TvShowDetailComponent implements OnInit {
  public tvShowDetails$?: VideoItem = null;
  public loading$: boolean = false;
  public routeId = this.route.snapshot.paramMap.get('id');


  constructor(
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>,
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new tvShowsActions.TvShowFetchDetail(this.routeId));

    this.store.select('tvShow').subscribe((res: TvShowsModel) => {
      this.tvShowDetails$ = res.tvShowDetails;
      this.loading$ = res.loading;
    });
  }

}
