import {NgModule} from '@angular/core';
import {GalleryComponent} from './gallery.component';
import {GalleryItemComponent} from './gallery-item/gallery-item.component';
import {GalleryAddComponent} from './gallery-add/gallery-add.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    GalleryComponent,
    GalleryItemComponent,
    GalleryAddComponent,
  ],
  imports: [
    RouterModule.forChild([{path: 'gallery', component: GalleryComponent, pathMatch: 'full'}]),
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    GalleryComponent,
    GalleryItemComponent,
    GalleryAddComponent
  ],
})
export class GalleryModule {
}
