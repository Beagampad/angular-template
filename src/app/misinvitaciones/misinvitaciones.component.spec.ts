import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisinvitacionesComponent } from './misinvitaciones.component';

describe('MisinvitacionesComponent', () => {
  let component: MisinvitacionesComponent;
  let fixture: ComponentFixture<MisinvitacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisinvitacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisinvitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
