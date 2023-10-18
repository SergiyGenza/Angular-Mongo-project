import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Food } from 'src/app/common/models/food';
import { FoodService } from 'src/app/common/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute,
  ) {
    let foodObservable: Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        foodObservable = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      } else if (params['tag']) {
        foodObservable = this.foodService.getAllFoodsByTag(params['tag']);
      }
      else {
        foodObservable = foodService.getAll();
      }
      foodObservable.subscribe((res) => this.foods = res);
    })
  }
}
