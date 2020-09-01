import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowContentComponent } from './tv-show-content.component';

describe('TvShowContentComponent', () => {
  let component: TvShowContentComponent;
  let fixture: ComponentFixture<TvShowContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
