import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantRoutingModule } from './merchant-routing.module';
import {HomeMerchantComponent} from "./home-merchant/home-merchant.component";
import {FoodListComponent} from "./food-list/food-list.component";
import {EditMerchantComponent} from "./edit-merchant/edit-merchant.component";
import {CreateFoodComponent} from "./create-food/create-food.component";
import {ReactiveFormsModule} from "@angular/forms";
import { EditFoodComponent } from './edit-food/edit-food.component';
import {NgxPaginationModule} from "ngx-pagination";
import {AppModule} from "../app.module";
import {UploadImageComponent} from "../upload/upload-image/upload-image.component";


@NgModule({
  declarations: [
    HomeMerchantComponent,
    FoodListComponent,
    EditMerchantComponent,
    CreateFoodComponent,
    EditFoodComponent,
    UploadImageComponent,
  ],
  imports: [
    CommonModule,
    MerchantRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  exports: [
    UploadImageComponent
  ]
})
export class MerchantModule { }
