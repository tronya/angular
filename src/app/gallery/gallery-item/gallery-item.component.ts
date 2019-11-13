import {Component, Input, OnInit} from '@angular/core';
import {GalleryItemModel} from './gallery-item.model';
import ColorThief from 'src/vibrant';


@Component({
  selector: 'app-gallery-item',
  templateUrl: 'gallery-item.component.html',
  styleUrls: ['gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {
  @Input() galleryItem: GalleryItemModel;
  colorPalette = [];

  ngOnInit() {
    this.getImageColors(this.galleryItem.imageUrl, 3);
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

}
