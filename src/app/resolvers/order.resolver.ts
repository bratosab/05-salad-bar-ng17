import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order.model';

export const orderResolver: ResolveFn<void> = (route, state) => {
  const orderService = inject(OrderService);
  const router = inject(Router)

debugger

  if (!orderService.currentOrder) {
    const orderId: number = +route.params['id'];
    const localOrder = localStorage.getItem('order');

    if (localOrder) {
      const order: Order = JSON.parse(localOrder);

      if (order.id === orderId) {
        orderService.currentOrder = order;
      } else {
        router.navigate([''])
      }
    } else {
      router.navigate([''])
    }
  }
};
