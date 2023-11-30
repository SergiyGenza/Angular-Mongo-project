import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/common/models/order';
import { OrderService } from 'src/app/common/services/order.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './paymentPage.component.html',
  styleUrls: ['./paymentPage.component.css']
})
export class PaymentPageComponent implements OnInit {

  order: Order = new Order();
  constructor(orderService: OrderService, router: Router) {
    orderService.getNewOrderForCurrentUser().subscribe({
      next: (order) => {
        this.order = order;
      },
      error: () => {
        router.navigateByUrl('/chekcout');
      }
    })

  }

  ngOnInit(): void {
  }

}