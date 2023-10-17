import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/components/page/home/home.component';
import { FoodPageComponent } from './common/components/page/food-page/food-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'food/:id', component: FoodPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
