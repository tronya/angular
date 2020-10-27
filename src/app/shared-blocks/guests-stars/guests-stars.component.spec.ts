import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsStarsComponent } from './guests-stars.component';

describe('GuestsStartComponent', () => {
  let component: GuestsStarsComponent;
  let fixture: ComponentFixture<GuestsStarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestsStarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestsStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
