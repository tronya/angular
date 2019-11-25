import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {GalleryService} from '../gallery.service';
import {GalleryItemModel} from '../gallery-item/gallery-item.model';
import ColorThief from 'src/vibrant';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.css']
})
export class GalleryDetailComponent implements OnInit {
  id = '';
  galleryItem: GalleryItemModel;
  colorPalette;

  constructor(private route: ActivatedRoute,
              private galleryService: GalleryService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.galleryItem = this.galleryService.getGalleryItem(params.id).pop();
          this.colorPalette = this.getImageColors(this.galleryItem.imageUrl, 3);
        }
      );
  }

  getImageColors(src: string, count: number = 5): void {

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
