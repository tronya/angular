import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MoviesComponent} from './movies.component';
import {MoviesDetailComponent} from './movies-detail/movies-detail.component';
import {MoviesDetailResolverService} from './movies-detail/movies-detail-resolver.service';

const routes: Routes = [{
  path: '',
  component: MoviesComponent,
},
  {
    path: ':id',
    component: MoviesDetailComponent,
    pathMatch: 'full',
    resolve: [MoviesDetailResolverService]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})

export class MoviesRouterModule {
}
