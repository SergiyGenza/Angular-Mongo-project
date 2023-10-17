import { Injectable } from '@angular/core';
import { Food } from '../models/food';
import { sample_foods } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getFoodById(foodId: string): Food {
    return this.getAll().find(food => food.id == foodId) ?? new Food();
  }
}
