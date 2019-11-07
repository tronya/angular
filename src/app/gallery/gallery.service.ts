import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GalleryItemModel} from './gallery-item/gallery-item.model';
import {Subject} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class GalleryService {
  galleryItems = new Subject<GalleryItemModel[]>();

  constructor(private http: HttpClient) {
  }

  transCodeResponse(resp) {
    return Object.keys(resp).map(
      elId => ({
        id: elId,
        ...resp[elId]
      })
    );
  }

  sortByDate() {
  }

  fetchImages() {
    this.http.get<GalleryItemModel[]>(
      'https://ng-course-487a6.firebaseio.com/gallery.json'
    ).pipe(
      map(this.transCodeResponse)
    )
      .subscribe((res: GalleryItemModel[]) => {
        this.galleryItems.next(res);
      });
  }

  saveItem(image: GalleryItemModel) {
    this.http.post<GalleryItemModel>('https://ng-course-487a6.firebaseio.com/gallery.json', image)
      .subscribe(res => console.log(res));
  }

}
