import {NgModule} from '@angular/core';
import {MoviesComponent} from './movies.component';
import {SharedModule} from '../shared/shared.module';
import {MoviesRouterModule} from './movies-router.module';
import {MoviesDetailComponent} from './movies-detail/movies-detail.component';
import {SharedBlocksModule} from '../shared-blocks/shared-blocks.module';

@NgModule({
  declarations: [MoviesComponent, MoviesDetailComponent],
  imports: [
    SharedModule,
    SharedBlocksModule,
    MoviesRouterModule
  ]
})

export class MoviesModule {
}

