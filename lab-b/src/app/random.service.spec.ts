import { TestBed } from '@angular/core/testing';

import { RandomService } from './random.service';

describe('RandomService', () => {
  let service: RandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomService);
  });

  describe('randomNumber', () => {
    it('should return between 1-100', () => {
      const max = 100;
      for (let i = 0; i < 10; i++) {
        const drawn = service.randomNumber(max);
        expect(drawn).toBeLessThanOrEqual(max);
        expect(drawn).toBeGreaterThanOrEqual(1);
        expect(Math.round(drawn)).withContext('Must be integer').toEqual(drawn);
      }
    });

    it('should return values [1,2,3] only', () => {
      const max = 3;
      const possibleValues = [1,2,3];
      for (let i = 0; i < 10; i++) {
        const drawn = service.randomNumber(max);
        expect(possibleValues).toContain(drawn);
      }
    });
  });
});
