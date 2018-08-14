import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlablaComponent } from './blabla.component';

describe('BlablaComponent', () => {
  let component: BlablaComponent;
  let fixture: ComponentFixture<BlablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
