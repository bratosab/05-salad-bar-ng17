import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  currentOrder!: Order;

  constructor() { }

  createNewOrder(name: string) {
    this.currentOrder = {
      name,
      id: Math.random()
    }

    return this.currentOrder
  }
}
