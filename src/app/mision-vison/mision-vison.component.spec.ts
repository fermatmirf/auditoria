import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisionVisonComponent } from './mision-vison.component';

describe('MisionVisonComponent', () => {
  let component: MisionVisonComponent;
  let fixture: ComponentFixture<MisionVisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisionVisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisionVisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
