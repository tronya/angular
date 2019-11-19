import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/gallery', pathMatch: 'full'},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  {path: 'gallery', loadChildren: './gallery/gallery.module#GalleryModule'},
  {path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'},
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
