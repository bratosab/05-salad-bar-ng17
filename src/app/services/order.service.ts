import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { Topping } from '../models/topping.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  currentOrder!: Order;

  constructor() { }

  /**
   * Create a new order
   * @param name the name of the user
   * @returns the order instance
   */
  createNewOrder(name: string) {
    this.currentOrder = {
      name,
      id: Math.random(),
      toppings: []
    }

    localStorage.setItem('order', JSON.stringify(this.currentOrder))
    return this.currentOrder
  }

  addTopping(topping: Topping) {
    this.currentOrder.toppings.push(topping)
  }

  get totalPrice(): number {
    return this.currentOrder.toppings.reduce((totalPrice, topping) => {
      return totalPrice + topping.price
    }, 0)
  }
}
