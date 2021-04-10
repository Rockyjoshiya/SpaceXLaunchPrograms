import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TransferState } from '@angular/platform-browser';

import { DataResolverService } from './data-resolver.service';

describe('DataResolverService', () => {
  let service: DataResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[TransferState]
    });
    service = TestBed.inject(DataResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
