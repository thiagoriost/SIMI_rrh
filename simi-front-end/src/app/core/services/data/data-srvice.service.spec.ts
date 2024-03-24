import { TestBed } from '@angular/core/testing';

import { DataSrviceService } from './data-srvice.service';

describe('DataSrviceService', () => {
  let service: DataSrviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSrviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
