import {NgModule} from '@angular/core';
import {MoviesComponent} from './movies.component';
import {SharedModule} from '../shared/shared.module';
import {MoviesRouterModule} from './movies-router.module';

@NgModule({
  declarations: [MoviesComponent],
  imports: [SharedModule, MoviesRouterModule]
})

export class MoviesModule {
}

