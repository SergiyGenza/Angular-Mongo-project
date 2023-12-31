import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/layout/header/header.component';
import { HomeComponent } from './common/components/page/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './common/components/partials/search/search.component';
import { FoodPageComponent } from './common/components/page/food-page/food-page.component';
import { TagsComponent } from './common/components/partials/tags/tags.component';
import { CartPageComponent } from './common/components/page/cart-page/cart-page.component';
import { TitleComponent } from './common/components/partials/title/title.component';
import { NotFoundComponent } from './common/components/partials/not-found/not-found.component';
import { LoginPageComponent } from './common/components/page/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputContainerComponent } from './common/components/partials/input-container/input-container.component';
import { InputValidationComponent } from './common/components/partials/input-validation/input-validation.component';
import { TextInputComponent } from './common/components/partials/text-input/text-input.component';
import { DefaultButtonComponent } from './common/components/partials/default-button/default-button.component';
import { RegisterPageComponent } from './common/components/page/register-page/register-page.component';
import { LoadingComponent } from './common/components/partials/loading/loading.component'
import { LoadingInterceptor } from './common/interceptors/loading.interceptor';
import { CheckoutPageComponent } from './common/components/page/checkout-page/checkout-page.component';
import { OrderItemsListComponent } from './common/components/partials/order-items-list/order-items-list.component';
import { MapComponent } from './common/components/partials/map/map.component';
import { AuthInterceptor } from './common/interceptors/auth.interceptor';
import { PaymentPageComponent } from './common/components/page/paymentPage/paymentPage.component';
import { PaypalBtnComponent } from './common/components/partials/paypal-btn/paypal-btn.component';
import { OrderPageComponent } from './common/components/page/order-page/order-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FoodPageComponent,
    TagsComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginPageComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent,
    RegisterPageComponent,
    LoadingComponent,
    CheckoutPageComponent,
    OrderItemsListComponent,
    MapComponent,
    PaymentPageComponent,
    PaypalBtnComponent,
    OrderPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RatingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      newestOnTop: false,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
