import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GalleryComponent} from './gallery.component';
import {GalleryDetailComponent} from './gallery-detail/gallery-detail.component';

const routes: Routes = [{
  path: '',
  component: GalleryComponent,
}, {
  path: ':id',
  component: GalleryDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GalleryRouterModule {
}
