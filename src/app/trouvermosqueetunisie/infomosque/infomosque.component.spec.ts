import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomosqueComponent } from './infomosque.component';

describe('InfomosqueComponent', () => {
  let component: InfomosqueComponent;
  let fixture: ComponentFixture<InfomosqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfomosqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomosqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
