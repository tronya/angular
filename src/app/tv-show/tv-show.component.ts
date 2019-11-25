import {Component, OnInit} from '@angular/core';
import {TvShowService} from './tv-show.service';
import {TvShowsGetModel} from './tvShowsGet.model';
import {TvShowModel} from './tv-show.model';

@Component({
  selector: 'app-movies',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {
  shows: TvShowModel[] = [];

  constructor(private moviesService: TvShowService) {
  }

  ngOnInit() {
    this.moviesService.getTvShows()
      .subscribe((res: TvShowsGetModel) => {
        console.log(res);
        this.shows = res.results;
      });
  }

}
