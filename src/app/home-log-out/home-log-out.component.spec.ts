import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLogOutComponent } from './home-log-out.component';

describe('HomeLogOutComponent', () => {
  let component: HomeLogOutComponent;
  let fixture: ComponentFixture<HomeLogOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLogOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLogOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
