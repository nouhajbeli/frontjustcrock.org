import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuranecritComponent } from './quranecrit.component';

describe('QuranecritComponent', () => {
  let component: QuranecritComponent;
  let fixture: ComponentFixture<QuranecritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuranecritComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuranecritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
