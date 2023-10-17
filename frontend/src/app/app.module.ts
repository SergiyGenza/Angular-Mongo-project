import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/layout/header/header.component';
import { HomeComponent } from './common/components/page/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './common/components/partials/search/search.component';
import { FoodPageComponent } from './common/components/page/food-page/food-page.component';
import { TagsComponent } from './common/components/partials/tags/tags.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FoodPageComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
