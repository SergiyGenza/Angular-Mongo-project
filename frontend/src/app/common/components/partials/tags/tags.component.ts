import { Component } from '@angular/core';
import { Tag } from 'src/app/common/models/tag';
import { FoodService } from 'src/app/common/services/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
  tags?: Tag[];

  constructor(foodService: FoodService) {
    foodService.getAllTags().subscribe(res => this.tags = res);
  }

}
