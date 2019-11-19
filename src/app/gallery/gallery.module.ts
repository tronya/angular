import {NgModule} from '@angular/core';
import {GalleryComponent} from './gallery.component';
import {GalleryItemComponent} from './gallery-item/gallery-item.component';
import {GalleryAddComponent} from './gallery-add/gallery-add.component';
import {SharedModule} from '../shared/shared.module';
import {GalleryDetailComponent} from './gallery-detail/gallery-detail.component';
import {GalleryRouterModule} from './gallery-router.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    GalleryComponent,
    GalleryItemComponent,
    GalleryAddComponent,
    GalleryDetailComponent,
  ],
  imports: [
    SharedModule,
    GalleryRouterModule,
    ReactiveFormsModule
  ],
  exports: [],
})
export class GalleryModule {
}
