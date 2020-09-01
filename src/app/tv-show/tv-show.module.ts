import {NgModule} from '@angular/core';
import {TvShowComponent} from './tv-show.component';
import {SharedModule} from '../shared/shared.module';
import {TvShowRouterModule} from './tv-show-router.module';
import {TvShowItemComponent} from './tv-show-item/tv-show-item.component';
import {TvShowDetailComponent} from './tv-show-detail/tv-show-detail.component';
import {SharedBlocksModule} from '../shared-blocks/shared-blocks.module';
import {TvShowSliderComponent} from './tv-show-slider/tv-show-slider.component';
import {TvShowContentComponent} from './tv-show-content/tv-show-content.component';

@NgModule({
  declarations: [
    TvShowComponent,
    TvShowItemComponent,
    TvShowDetailComponent,
    TvShowSliderComponent,
    TvShowContentComponent
  ],
  imports: [
    SharedModule,
    SharedBlocksModule,
    TvShowRouterModule,
  ],
})

export class TvShowModule {
}
