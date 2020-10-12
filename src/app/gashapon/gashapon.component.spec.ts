import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GashaponComponent } from './gashapon.component';
import { FormsModule } from '@angular/forms';


describe('GashaponComponent', () => {
  let component: GashaponComponent;
  let fixture: ComponentFixture<GashaponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ GashaponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GashaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
