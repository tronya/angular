import {NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    RouterModule.forChild([{path: 'auth', component: AuthComponent}]),
    FormsModule,
    SharedModule,
    CommonModule
  ]
})

export class AuthModule {

}
