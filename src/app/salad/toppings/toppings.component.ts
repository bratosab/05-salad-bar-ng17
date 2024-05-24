import { Component, OnInit } from '@angular/core';
import { ToppingsService } from '../../services/toppings.service';
import { Topping } from '../../models/topping.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrl: './toppings.component.scss',
})
export class ToppingsComponent implements OnInit {
  toppings: Topping[] = [];

  constructor(
    private toppingsService: ToppingsService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.toppingsService.getToppings().subscribe((toppings) => {
      this.toppings = toppings;
    });
  }
 
  chooseTopping(topping: Topping) {
    this.toppings = this.toppings.filter(t => t !== topping)

    this.orderService.addTopping(topping)
  }
}
