import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMosqueComponent } from './edit-mosque.component';

describe('EditMosqueComponent', () => {
  let component: EditMosqueComponent;
  let fixture: ComponentFixture<EditMosqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMosqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMosqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
