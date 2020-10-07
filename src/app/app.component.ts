import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromApp from './store/app.reducer';
import {AppState} from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<fromApp.AppState>,
  ) {
  }

  ngOnInit() {
    this.store.subscribe((store: AppState) => {
      localStorage.setItem('state', JSON.stringify(store));
    });
  }
}
