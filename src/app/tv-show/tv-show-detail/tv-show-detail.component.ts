import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {TvShowService} from '../tv-show.service';
import {generateImage} from '../../shared/helpers';
import ColorThief from 'src/vibrant';

@Component({
  selector: 'app-tv-show-detail',
  templateUrl: './tv-show-detail.component.html',
  styleUrls: ['./tv-show-detail.component.css']
})
export class TvShowDetailComponent implements OnInit {
  generateImage = generateImage;
  colorPalette = [];
  routeId = this.route.snapshot.paramMap.get('id');

  tvShowDetail$ = this.tvShow.getTvShowDetail(+this.routeId);

  constructor(private route: ActivatedRoute, private tvShow: TvShowService) {
  }

  getImageColors(src: string, count: number = 5) {

    const colorThief = new ColorThief();
    const img = new Image();
    const googleProxyURL = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';

    img.crossOrigin = 'Anonymous';
    img.src = googleProxyURL + encodeURIComponent(src);

    img.addEventListener('load', () => {
      this.colorPalette = colorThief.getPalette(img, count);
    });
  }

  ngOnInit() {
  }

}
