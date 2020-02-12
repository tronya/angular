import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/tv-show', pathMatch: 'full'},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  {path: 'gallery', loadChildren: './gallery/gallery.module#GalleryModule'},
  {path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'},
  {path: 'tv-show', loadChildren: './tv-show/tv-show.module#TvShowModule'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
