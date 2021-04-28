import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacqueliveComponent } from './macquelive.component';

describe('MacqueliveComponent', () => {
  let component: MacqueliveComponent;
  let fixture: ComponentFixture<MacqueliveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacqueliveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacqueliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
