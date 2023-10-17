import { Food } from "./food";

export class CartItem {
  constructor(public food: Food) {
  }
  // constructor(food: Food) {
  //   this.food = food;
  // }
  // food!: Food;
  quantity: number = 1;
  price: number = this.food.price;
}