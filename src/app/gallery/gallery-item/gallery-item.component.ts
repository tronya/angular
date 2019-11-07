import {Component, Input} from '@angular/core';
import {GalleryItemModel} from './gallery-item.model';


@Component({
  selector: 'app-gallery-item',
  templateUrl: 'gallery-item.component.html',
  styleUrls: ['gallery-item.component.css']
})
export class GalleryItemComponent {
  @Input() galleryItem: GalleryItemModel;

}
