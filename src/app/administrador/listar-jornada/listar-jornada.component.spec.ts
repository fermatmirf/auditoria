import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarJornadaComponent } from './listar-jornada.component';

describe('ListarJornadaComponent', () => {
  let component: ListarJornadaComponent;
  let fixture: ComponentFixture<ListarJornadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarJornadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarJornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
