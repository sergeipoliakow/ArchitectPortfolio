import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hover3dItemComponent } from './hover-3d-item.component';

describe('Hover3dItemComponent', () => {
  let component: Hover3dItemComponent;
  let fixture: ComponentFixture<Hover3dItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hover3dItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hover3dItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
