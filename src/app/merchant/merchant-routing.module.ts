import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FoodListComponent} from "./food-list/food-list.component";
import {CreateFoodComponent} from "./create-food/create-food.component";
import {EditMerchantComponent} from "./edit-merchant/edit-merchant.component";
import {HomeMerchantComponent} from "./home-merchant/home-merchant.component";
import {EditFoodComponent} from "./edit-food/edit-food.component";

const routes: Routes = [


  {
    path: '',
    component: HomeMerchantComponent,
    children: [
      {
        path: '',
        component: FoodListComponent,
      },
      {
        path: 'create-food',
        component: CreateFoodComponent,
      },
      {
        path: 'edit-food/:id',
        component: EditFoodComponent,
      },
      {
        path: 'edit-merchant/:id',
        component: EditMerchantComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
