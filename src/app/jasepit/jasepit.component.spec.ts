import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JasepitComponent } from './jasepit.component';

describe('JasepitComponent', () => {
  let component: JasepitComponent;
  let fixture: ComponentFixture<JasepitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JasepitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JasepitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
