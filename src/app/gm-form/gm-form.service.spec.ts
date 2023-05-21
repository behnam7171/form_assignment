import { TestBed } from '@angular/core/testing';

import { GmFormService } from './gm-form.service';

describe('GmFormService', () => {
  let service: GmFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GmFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
