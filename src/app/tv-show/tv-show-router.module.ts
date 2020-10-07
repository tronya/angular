import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TvShowComponent} from './tv-show.component';
import {TvShowDetailComponent} from './tv-show-detail/tv-show-detail.component';
import {TvShowSeasonsComponent} from './tv-show-seasons/tv-show-seasons.component';

const routes: Routes = [{
  path: '',
  component: TvShowComponent,
}, {
  path: ':id',
  component: TvShowDetailComponent,
}, {
  path: ':id/season/:number',
  component: TvShowSeasonsComponent,
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})

export class TvShowRouterModule {
}
