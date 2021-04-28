import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecitateursComponent } from './recitateurs.component';

describe('RecitateursComponent', () => {
  let component: RecitateursComponent;
  let fixture: ComponentFixture<RecitateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecitateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecitateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
