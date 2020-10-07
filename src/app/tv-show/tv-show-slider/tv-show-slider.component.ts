import { Component, OnInit } from '@angular/core';
import {TvShowsModel} from '../tv-shows.model';
import {VideoItem} from '../../shared/video-item';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {handleError} from '../store/tv-show.effects';

@Component({
  selector: 'app-tv-show-slider',
  templateUrl: './tv-show-slider.component.html',
  styleUrls: ['./tv-show-slider.component.css']
})
export class TvShowSliderComponent implements OnInit {

  shows: TvShowsModel;
  results: VideoItem[] = [];
  loading = false;

  constructor(
    private http: HttpClient
  ) {
  }

  public switchSource(param: string) {
    this.getTvShows(param);
  }

  private getTvShows(payload: string = 'popular'): void {
    this.loading = true;
    this.http.get(`https://api.themoviedb.org/3/tv/${payload}?count=2`)
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
