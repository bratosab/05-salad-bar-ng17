import { Topping } from "./topping.model";

export interface Order {
    id: number;
    name: string;
    toppings: Topping[];
}