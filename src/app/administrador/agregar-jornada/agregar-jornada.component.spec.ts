import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarJornadaComponent } from './agregar-jornada.component';

describe('AgregarJornadaComponent', () => {
  let component: AgregarJornadaComponent;
  let fixture: ComponentFixture<AgregarJornadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarJornadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarJornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
