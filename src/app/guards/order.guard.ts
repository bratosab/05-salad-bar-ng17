import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OrderService } from '../services/order.service';

export const orderGuard: CanActivateFn = (route, state) => {
  const orderService = inject(OrderService)
  const router = inject(Router)
  
  if(!!orderService.currentOrder) {
    return true
  } else {
    router.navigate([''])
    return false
  }
};
