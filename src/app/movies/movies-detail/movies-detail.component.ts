import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {VideoItem} from '../../shared/video-item';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})

export class MoviesDetailComponent implements OnInit {
  public movieDetail: VideoItem;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>,
  ) {
  }

  ngOnInit() {
    console.log(this.route.snapshot);
    this.store.select('movies').subscribe(movies => {
      console.table(movies.movie_detail, 2);
      this.movieDetail = new VideoItem(movies.movie_detail);
    });
  }

}
