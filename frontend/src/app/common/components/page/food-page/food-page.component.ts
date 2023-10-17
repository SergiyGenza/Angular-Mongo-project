import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/common/models/food';
import { FoodService } from 'src/app/common/services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent {
  food!: Food;

  constructor(acticatedRoute: ActivatedRoute, foodServece: FoodService) {
    acticatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = foodServece.getFoodById(params['id']);
      }
    })
  }

}
