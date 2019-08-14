import { TestBed } from '@angular/core/testing';

import { WbUiService } from './wb-ui.service';

describe('WbUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WbUiService = TestBed.get(WbUiService);
    expect(service).toBeTruthy();
  });
});
