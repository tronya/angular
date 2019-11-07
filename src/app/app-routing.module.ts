import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {AuthComponent} from './auth/auth.component';
import {GalleryComponent} from './gallery/gallery.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/it-works', pathMatch: 'full'},
  {path: 'gallery', pathMatch: 'full', component: GalleryComponent},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'auth', component: AuthComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
