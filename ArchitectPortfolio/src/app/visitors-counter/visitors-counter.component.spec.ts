import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsCounterComponent } from './visitors-counter.component';

describe('VisitorsCounterComponent', () => {
  let component: VisitorsCounterComponent;
  let fixture: ComponentFixture<VisitorsCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorsCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
