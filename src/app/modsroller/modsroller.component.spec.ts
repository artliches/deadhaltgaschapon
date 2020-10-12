import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModsrollerComponent } from './modsroller.component';

describe('ModsrollerComponent', () => {
  let component: ModsrollerComponent;
  let fixture: ComponentFixture<ModsrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModsrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModsrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
