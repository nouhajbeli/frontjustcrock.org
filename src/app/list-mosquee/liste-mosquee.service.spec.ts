import { TestBed } from '@angular/core/testing';

import { ListeMosqueeService } from './liste-mosquee.service';

describe('ListeMosqueeService', () => {
  let service: ListeMosqueeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeMosqueeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
