import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {DropdownDirective} from './dropdown.directive';
import {ColorToHexPipe} from './colorToHex.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LoadingSpinnerComponent, DropdownDirective, ColorToHexPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    LoadingSpinnerComponent,
    DropdownDirective,
    ColorToHexPipe,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ]
})

export class SharedModule {
}
