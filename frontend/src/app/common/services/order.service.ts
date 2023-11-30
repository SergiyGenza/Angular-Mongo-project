import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ORDER_CREATE__URL, ORDER_NEW_FOR_CURRENT_USER_URL } from '../constants/url';
import { Order } from '../models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) { }

  create(order: Order) {
    return this.http.post<Order>(ORDER_CREATE__URL, order);
  }

  getNewOrderForCurrentUser(): Observable<Order> {
    return this.http.get<Order>(ORDER_NEW_FOR_CURRENT_USER_URL);
  }
}