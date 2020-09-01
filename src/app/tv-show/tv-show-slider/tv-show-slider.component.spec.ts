import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowSliderComponent } from './tv-show-slider.component';

describe('TvShowSliderComponent', () => {
  let component: TvShowSliderComponent;
  let fixture: ComponentFixture<TvShowSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
