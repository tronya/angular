import {Component, OnInit} from '@angular/core';
import {GalleryItemModel} from './gallery-item/gallery-item.model';
import {GalleryService} from './gallery.service';
import ColorGrabber from 'src/color';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  colorPalette = [];

  constructor(private galleryService: GalleryService) {
  }

  imageItems: GalleryItemModel[] = [];


  getImageColors(count: number = 5) {
    const url = 'http://warnet.ws/uploads/media/topic/2019/11/06/07/adcfe59fd43a3215153b.jpg';
    const colorGrabber = new ColorGrabber(url);

    colorGrabber.getColors()
      .then(r => {
        if (r) {
          return r.slice(0, count);
        }
        return null;
      })
      .then(r => this.colorPalette.push(...r))
      .then(() => console.log(this.colorPalette));


    // console.log(`The dominant color is ${colorThief[0].color} with ${colorThief[0].count} occurrence(s)`);
  }

  sortByDateHandle() {
    this.galleryService.sortByDate();
  }

  ngOnInit() {
    this.galleryService.fetchImages();
    this.galleryService.galleryItems.subscribe(items => {
      this.imageItems = items;
    });
    this.getImageColors();
  }
}
