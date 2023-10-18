import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/common/models/food';
import { CartService } from 'src/app/common/services/cart.service';
import { FoodService } from 'src/app/common/services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent {
  food!: Food;

  constructor(
    acticatedRoute: ActivatedRoute,
    foodServece: FoodService,
    private cartService: CartService,
    private router: Router,
  ) {
    acticatedRoute.params.subscribe((params) => {
      if (params['id']) {
        foodServece.getFoodById(params['id']).subscribe(res => {
          this.food = res;
        })
      }
    })
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
