import {NgModule} from '@angular/core';
import {ParallaxSliderComponent} from './parallax-slider.component';
import {ParallaxSliderItemComponent} from './parallax-item/parallax-item.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ParallaxSliderComponent,
    ParallaxSliderItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [ParallaxSliderComponent]
})

export class ParallaxSliderModule {
}
