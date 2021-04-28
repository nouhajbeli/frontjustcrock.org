import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMosqueeComponent } from './list-mosquee.component';

describe('ListMosqueeComponent', () => {
  let component: ListMosqueeComponent;
  let fixture: ComponentFixture<ListMosqueeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMosqueeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMosqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
