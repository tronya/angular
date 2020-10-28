import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MapComponent} from './map/map.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'tv-show', pathMatch: 'full'},
  {path: 'tv-show', loadChildren: './tv-show/tv-show.module#TvShowModule'},
  {path: 'movies', loadChildren: './movies/movies.module#MoviesModule'},
  {path: 'map', component: MapComponent},
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
