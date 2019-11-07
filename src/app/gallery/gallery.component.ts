import {Component, OnInit} from '@angular/core';
import {GalleryItemModel} from './gallery-item/gallery-item.model';
import {GalleryService} from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private galleryService: GalleryService) {
  }

  imageItems: GalleryItemModel[] = [];


  sortByDateHandle() {
    this.galleryService.sortByDate();
  }

  ngOnInit() {
    this.galleryService.fetchImages();
    this.galleryService.galleryItems.subscribe(items => {
      this.imageItems = items;
    });
  }
}
