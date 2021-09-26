import { TestBed } from '@angular/core/testing';

import { MainListService } from './main-list.service';

describe('MainListService', () => {
  let service: MainListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
