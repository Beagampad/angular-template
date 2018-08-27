import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaDetailComponent } from './ruta-detail.component';

describe('RutaDetailComponent', () => {
  let component: RutaDetailComponent;
  let fixture: ComponentFixture<RutaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
