import {NgModule} from '@angular/core';
import {TvShowComponent} from './tv-show.component';
import {SharedModule} from '../shared/shared.module';
import {TvShowRouterModule} from './tv-show-router.module';
import {TvShowItemComponent} from './tv-show-item/tv-show-item.component';
import {TvShowDetailComponent} from './tv-show-detail/tv-show-detail.component';
import {SeasonsComponent} from './seasons/seasons.component';
import {EpisodeComponent} from './episode/episode.component';
import {InformationComponent} from './information/information.component';

@NgModule({
  declarations: [TvShowComponent, TvShowItemComponent, TvShowDetailComponent, SeasonsComponent, EpisodeComponent, InformationComponent],
  exports: [SeasonsComponent],
  imports: [
    SharedModule,
    TvShowRouterModule,
  ],
})

export class TvShowModule {
}
