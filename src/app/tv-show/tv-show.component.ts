import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {VideoItem} from '../shared/video-item';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {TvShowsModel} from './tv-shows.model';
import {handleError} from './store/tv-show.effects';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {
  shows: TvShowsModel;
  results: VideoItem[] = [];
  loading = false;

  private tvShowSub: Subscription;

  constructor(
    private http: HttpClient
  ) {
  }

  private switchSource(param: string) {
    this.getTvShows(param);
  }

  private getTvShows(payload: string = 'popular'): void {
    this.loading = true;
    this.http.get(`https://api.themoviedb.org/3/tv/${payload}?count=2&api_key=${environment.TheMovieDBKey}`)
      .pipe(
        map(res => new TvShowsModel(res)),
        catchError(errorRes => {
          return handleError(errorRes);
        })
      ).subscribe((res: TvShowsModel) => {
      this.loading = false;
      this.shows = res;
      this.results = res.results;
    });
  }

  ngOnInit() {
    this.getTvShows();
  }

}
