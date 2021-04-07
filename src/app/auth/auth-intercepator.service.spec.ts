import { TestBed } from '@angular/core/testing';

import { AuthIntercepatorService } from './auth-intercepator.service';

describe('AuthIntercepatorService', () => {
  let service: AuthIntercepatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthIntercepatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
