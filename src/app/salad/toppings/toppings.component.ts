import { Component, OnInit } from '@angular/core';
import { ToppingsService } from '../../services/toppings.service';
import { Topping } from '../../models/topping.model';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrl: './toppings.component.scss'
})
export class ToppingsComponent implements OnInit {
  toppings: Topping[] = []

  constructor(private toppingsService: ToppingsService) { }
  
  ngOnInit(): void {
    this.toppingsService.getToppings().subscribe(toppings => {
      this.toppings = toppings;
    });
  }


}
