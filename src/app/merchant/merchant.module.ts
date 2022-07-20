import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantRoutingModule } from './merchant-routing.module';
import {HomeMerchantComponent} from "./home-merchant/home-merchant.component";
import {FoodListComponent} from "./food-list/food-list.component";
import {EditMerchantComponent} from "./edit-merchant/edit-merchant.component";
import {CreateFoodComponent} from "./create-food/create-food.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomeMerchantComponent,
    FoodListComponent,
    EditMerchantComponent,
    CreateFoodComponent
  ],
  imports: [
    CommonModule,
    MerchantRoutingModule,
    ReactiveFormsModule,
  ]
})
export class MerchantModule { }
