import { Component } from '@angular/core';
import { Cart } from 'src/app/common/models/cart';
import { CartItem } from 'src/app/common/models/cartItem';
import { CartService } from 'src/app/common/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  cart!: Cart;

  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => this.cart = cart)
  }

  public removeFromCart(catrItem: CartItem) {
    this.cartService.removeFromCart(catrItem.food.id);
  }

  public changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }
}
