import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalfunctionsrollerComponent } from './malfunctionsroller.component';

describe('MalfunctionsrollerComponent', () => {
  let component: MalfunctionsrollerComponent;
  let fixture: ComponentFixture<MalfunctionsrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalfunctionsrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalfunctionsrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
