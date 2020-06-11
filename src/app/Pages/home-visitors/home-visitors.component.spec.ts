import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVisitorsComponent } from './home-visitors.component';

describe('HomeVisitorsComponent', () => {
  let component: HomeVisitorsComponent;
  let fixture: ComponentFixture<HomeVisitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVisitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
