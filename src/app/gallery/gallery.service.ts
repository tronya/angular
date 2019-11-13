import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GalleryItemModel} from './gallery-item/gallery-item.model';
import {BehaviorSubject, Subject, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class GalleryService {
  galleryItems = new BehaviorSubject<GalleryItemModel[]>([]);
  processing = false;

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
    const newSortedByDate = this.galleryItems.getValue().reverse();
    console.log(newSortedByDate);
    this.galleryItems.next(newSortedByDate);
  }

  errorHandler(error: Error) {
    this.processing = false;
    if (error.message) {
      return throwError(error.message);
    }
    return throwError('We got no information');
  }

  fetchImages() {
    this.http.get<GalleryItemModel[]>(
      'https://ng-course-487a6.firebaseio.com/gallery.json?&print=pretty'
    ).pipe(
      map(this.transCodeResponse),
      catchError(this.errorHandler)
    ).subscribe((res: GalleryItemModel[]) => {
      this.galleryItems.next(res);
      this.processing = false;
    });
  }

  saveItem(image: GalleryItemModel) {
    this.processing = true;
    this.http.post<GalleryItemModel>('https://ng-course-487a6.firebaseio.com/gallery.json?print=pretty', image)
      .pipe(
        catchError(this.errorHandler)
      ).subscribe();
  }

}
