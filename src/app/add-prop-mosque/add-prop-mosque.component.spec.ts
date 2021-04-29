import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPropMosqueComponent } from './add-prop-mosque.component';

describe('AddPropMosqueComponent', () => {
  let component: AddPropMosqueComponent;
  let fixture: ComponentFixture<AddPropMosqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPropMosqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPropMosqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
