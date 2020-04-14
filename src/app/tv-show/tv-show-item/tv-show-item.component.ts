import {Component, Input, OnInit} from '@angular/core';
import {faFilm, faPoll, faFire, faGlobeAmericas, faLanguage, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';

import ColorThief from 'src/vibrant';
import {ColorToHexPipe} from '../../shared/colorToHex.pipe';
import {generateImage} from '../../shared/helpers';
import {VideoItem} from '../../shared/video-item';

@Component({
  selector: 'app-tv-show-item',
  templateUrl: './tv-show-item.component.html',
  styleUrls: ['./tv-show-item.component.css']
})
export class TvShowItemComponent implements OnInit {
  @Input() show: VideoItem;
  colorPalette = [];
  generateImage = generateImage;

  // icons
  faFilm = faFilm;
  faPoll = faPoll;
  faFire = faFire;
  faGlobeAmericas = faGlobeAmericas;
  faLanguage = faLanguage;
  faArrowCircleRight = faArrowCircleRight;

  constructor() {
  }

  ngOnInit() {
    this.getImageColors(generateImage(this.show.posterPath), 3);
  }

  getImageColors(src: string, count: number = 3) {
    console.log(src);

    const colorThief = new ColorThief();
    const img = new Image();
    const googleProxyURL = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';

    img.crossOrigin = 'Anonymous';
    img.src = googleProxyURL + encodeURIComponent(src);

    img.addEventListener('load', () => {
      this.colorPalette = colorThief.getPalette(img, count);
    });
  }

  getGradient() {
    const start = new ColorToHexPipe().transform(this.colorPalette[0]);
    const end = new ColorToHexPipe().transform(this.colorPalette[2]);
    return `linear-gradient(to right top, ${start},${end})`;
  }

}
