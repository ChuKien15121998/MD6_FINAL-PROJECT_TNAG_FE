import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FoodListComponent} from "./merchant/food-list/food-list.component";
import {HomeComponent} from "./homeshow/home/home.component";
import {HomeMerchantComponent} from "./merchant/home-merchant/home-merchant.component";
import {EditMerchantComponent} from "./merchant/edit-merchant/edit-merchant.component";
import {CustomerLoginComponent} from "./auth/customer-login/customer-login.component";
import {MerchantRegisterComponent} from "./auth/merchant-register/merchant-register.component";
import {CustomerRegisterComponent} from "./auth/customer-register/customer-register.component";
import {MerchantLoginComponent} from "./auth/merchant-login/merchant-login.component";
import {DetailFoodComponent} from "./homeshow/detail-food/detail-food.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,},
    // children: [
    {
      path: 'customer-login',
      component: CustomerLoginComponent,
    },
  {
    path: 'detail-food/:id',
    component: DetailFoodComponent,
  },
  {
    path: 'merchant-login',
    component: MerchantLoginComponent,
  },
      {
        path: 'register-merchant',
        component: MerchantRegisterComponent,
      },
      {
        path: 'register-customer',
        component: CustomerRegisterComponent,
      },
    // ]
  {
    path: 'merchant',
    loadChildren: () => import('./merchant/merchant.module').then(module => module.MerchantModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
