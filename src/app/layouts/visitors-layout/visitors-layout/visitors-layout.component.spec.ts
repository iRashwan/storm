import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsLayoutComponent } from './visitors-layout.component';

describe('VisitorsLayoutComponent', () => {
  let component: VisitorsLayoutComponent;
  let fixture: ComponentFixture<VisitorsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
