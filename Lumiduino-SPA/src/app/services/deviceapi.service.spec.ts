import { TestBed } from '@angular/core/testing';

import { DeviceapiService } from './deviceapi.service';

describe('DeviceapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceapiService = TestBed.get(DeviceapiService);
    expect(service).toBeTruthy();
  });
});
