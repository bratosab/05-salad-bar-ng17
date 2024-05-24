import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ToppingsService } from './toppings.service';
import { Topping } from '../models/topping.model';

describe('ToppingsService', () => {
  let service: ToppingsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ToppingsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getToppings should return toppings list', (done: DoneFn) => {
    const toppingsMock: Topping[] = [{ id: 0, name: 'bacon', price: 5 }];

    service.getToppings().subscribe((toppings) => {
      expect(toppings).toEqual(toppingsMock);
      done();
    });

    const req = httpTestingController.expectOne(
      'https://retoolapi.dev/udhTkG/toppings'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(toppingsMock);
  });
});
