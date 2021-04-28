import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenmosqueComponent } from './fullscreenmosque.component';

describe('FullscreenmosqueComponent', () => {
  let component: FullscreenmosqueComponent;
  let fixture: ComponentFixture<FullscreenmosqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullscreenmosqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullscreenmosqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
