import { TestBed } from '@angular/core/testing';

import { FavouriteapiService } from './favouriteapi.service';

describe('FavouriteapiService', () => {
  let service: FavouriteapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
