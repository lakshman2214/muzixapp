import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackSearchComponent } from './home.component';

describe('TrackSearchComponent', () => {
  let component: TrackSearchComponent;
  let fixture: ComponentFixture<TrackSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
