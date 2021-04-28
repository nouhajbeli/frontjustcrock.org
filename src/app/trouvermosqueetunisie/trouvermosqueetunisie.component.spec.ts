import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouvermosqueetunisieComponent } from './trouvermosqueetunisie.component';

describe('TrouvermosqueetunisieComponent', () => {
  let component: TrouvermosqueetunisieComponent;
  let fixture: ComponentFixture<TrouvermosqueetunisieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrouvermosqueetunisieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrouvermosqueetunisieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
