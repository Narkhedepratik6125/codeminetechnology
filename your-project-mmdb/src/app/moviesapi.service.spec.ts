import { TestBed } from '@angular/core/testing';

import { MoviesapiService } from './MoviesapiService';

describe('MoviesapiService', () => {
  let service: MoviesapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
