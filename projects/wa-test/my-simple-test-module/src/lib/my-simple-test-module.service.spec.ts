import { TestBed, inject } from '@angular/core/testing';

import { MySimpleTestModuleService } from './my-simple-test-module.service';

describe('MySimpleTestModuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MySimpleTestModuleService]
    });
  });

  it('should be created', inject([MySimpleTestModuleService], (service: MySimpleTestModuleService) => {
    expect(service).toBeTruthy();
  }));
});
