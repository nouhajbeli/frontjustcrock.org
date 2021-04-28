import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosqueDetailsComponent } from './mosque-details.component';

describe('MosqueDetailsComponent', () => {
  let component: MosqueDetailsComponent;
  let fixture: ComponentFixture<MosqueDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MosqueDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MosqueDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
