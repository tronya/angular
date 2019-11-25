import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {TvShowService} from '../tv-show.service';
import {TvShowDetail} from './tv-show-detail-model';
import {generateImage} from '../../shared/helpers';

@Component({
  selector: 'app-tv-show-detail',
  templateUrl: './tv-show-detail.component.html',
  styleUrls: ['./tv-show-detail.component.css']
})
export class TvShowDetailComponent implements OnInit {
  tvShowDetail: TvShowDetail;
  generateImage = generateImage

  constructor(private route: ActivatedRoute, private tvShow: TvShowService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.tvShow.getTvShowDetail(params.id)
            .subscribe(detail => {
              console.log(detail)
              this.tvShowDetail = detail;
            });
        }
      );
  }

}
