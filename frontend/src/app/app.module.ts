import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

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
    LoginPageComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
