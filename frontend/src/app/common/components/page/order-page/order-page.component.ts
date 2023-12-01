import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/common/models/order';
import { OrderService } from 'src/app/common/services/order.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent {

  order!: Order;
  constructor(
    activatedRoute: ActivatedRoute,
    orderService: OrderService
  ) {
    const params = activatedRoute.snapshot.params;
    if (!params['orderId']) return;

    orderService.trackOrderById(params['orderId']).subscribe(order => {
      this.order = order;
      console.log(this.order);
      
    })

  }

  ngOnInit(): void {
  }
}
