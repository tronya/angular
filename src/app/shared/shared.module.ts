import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {DropdownDirective} from './dropdown.directive';
import {ColorToHexPipe} from './colorToHex.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AlertComponent} from './alert/alert.component';
import {LoggingService} from '../logging.service';
import {PlaceholderDirective} from './placeholder/placeholder.directive';
import {ParallaxSliderModule} from './parallax-slider/parallax-slider.module';
import {HeaderComponent} from '../header/header.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    DropdownDirective,
    ColorToHexPipe,
    AlertComponent,
    PlaceholderDirective,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ParallaxSliderModule,
    RouterModule
  ],
  exports: [
    LoadingSpinnerComponent,
    DropdownDirective,
    ColorToHexPipe,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    AlertComponent,
    PlaceholderDirective,
    ParallaxSliderModule,
    HeaderComponent
  ],
  entryComponents: [AlertComponent],
  providers: [LoggingService]
})

export class SharedModule {
}
