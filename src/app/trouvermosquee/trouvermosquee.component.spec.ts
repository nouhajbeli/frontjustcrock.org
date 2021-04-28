import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouvermosqueeComponent } from './trouvermosquee.component';

describe('TrouvermosqueeComponent', () => {
  let component: TrouvermosqueeComponent;
  let fixture: ComponentFixture<TrouvermosqueeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrouvermosqueeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrouvermosqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
