import { TestBed } from '@angular/core/testing';

import { MusicapiService } from './musicapi.service';

describe('MusicapiService', () => {
  let service: MusicapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
