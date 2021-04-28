import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevendiquermosqueComponent } from './revendiquermosque.component';

describe('RevendiquermosqueComponent', () => {
  let component: RevendiquermosqueComponent;
  let fixture: ComponentFixture<RevendiquermosqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevendiquermosqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevendiquermosqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
