import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/components/page/home/home.component';
import { FoodPageComponent } from './common/components/page/food-page/food-page.component';
import { CartPageComponent } from './common/components/page/cart-page/cart-page.component';
import { LoginPageComponent } from './common/components/page/login-page/login-page.component';
import { RegisterPageComponent } from './common/components/page/register-page/register-page.component';
import { CheckoutPageComponent } from './common/components/page/checkout-page/checkout-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'food/:id', component: FoodPageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'checkout', component: CheckoutPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
