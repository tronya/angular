import {NgModule} from '@angular/core';
import {SeasonsComponent} from './seasons/seasons.component';
import {EpisodeComponent} from './episode/episode.component';
import {InformationComponent} from './information/information.component';
import {NetworksComponent} from './networks/networks.component';
import {ProductionCompaniesComponent} from './production-companies/production-companies.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    SeasonsComponent,
    EpisodeComponent,
    InformationComponent,
    NetworksComponent,
    ProductionCompaniesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SeasonsComponent,
    EpisodeComponent,
    InformationComponent,
    NetworksComponent,
    ProductionCompaniesComponent
  ]
})

export class SharedBlocksModule {

}
