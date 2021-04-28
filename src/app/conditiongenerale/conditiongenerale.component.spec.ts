import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditiongeneraleComponent } from './conditiongenerale.component';

describe('ConditiongeneraleComponent', () => {
  let component: ConditiongeneraleComponent;
  let fixture: ComponentFixture<ConditiongeneraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditiongeneraleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditiongeneraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
