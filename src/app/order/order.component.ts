import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent {
  orderForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private router: Router
  ) {}

  startOrder() {
    if (this.orderForm.valid) {
      const order = this.orderService.createNewOrder(
        this.orderForm.value.name as string
      );

      this.router.navigate(['salad', order.id])
    }
  }
}
