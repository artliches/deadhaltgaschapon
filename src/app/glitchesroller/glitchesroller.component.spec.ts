import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlitchesrollerComponent } from './glitchesroller.component';

describe('GlitchesrollerComponent', () => {
  let component: GlitchesrollerComponent;
  let fixture: ComponentFixture<GlitchesrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlitchesrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlitchesrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
