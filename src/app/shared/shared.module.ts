import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {DropdownDirective} from './dropdown.directive';
import {ColorToHexPipe} from './colorToHex.pipe';

@NgModule({
  declarations: [LoadingSpinnerComponent, DropdownDirective, ColorToHexPipe],
  imports: [
    CommonModule,
  ],
  exports: [LoadingSpinnerComponent, DropdownDirective, ColorToHexPipe]
})

export class SharedModule {
}
