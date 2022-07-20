import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FoodListComponent} from "./merchant/food-list/food-list.component";
import {HomeComponent} from "./home/home.component";
import {HomeMerchantComponent} from "./merchant/home-merchant/home-merchant.component";
import {EditMerchantComponent} from "./merchant/edit-merchant/edit-merchant.component";


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./merchant/merchant.module').then(module => module.MerchantModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
