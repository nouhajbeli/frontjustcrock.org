import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempspriereComponent } from './tempspriere.component';

describe('TempspriereComponent', () => {
  let component: TempspriereComponent;
  let fixture: ComponentFixture<TempspriereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempspriereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempspriereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
