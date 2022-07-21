import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantRoutingModule } from './merchant-routing.module';
import {HomeMerchantComponent} from "./home-merchant/home-merchant.component";
import {FoodListComponent} from "./food-list/food-list.component";
import {EditMerchantComponent} from "./edit-merchant/edit-merchant.component";
import {CreateFoodComponent} from "./create-food/create-food.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditFoodComponent } from './edit-food/edit-food.component';
import {NgxPaginationModule} from "ngx-pagination";
import {AppModule} from "../app.module";
import {UploadImageComponent} from "../upload/upload-image/upload-image.component";
import { DetailMerchantComponent } from './detail-merchant/detail-merchant.component';
import { EditMerchantBannerComponent } from './edit-merchant-banner/edit-merchant-banner.component';
import { EditMerchantAvatarComponent } from './edit-merchant-avatar/edit-merchant-avatar.component';
import { DetailFoodComponent } from '../homeshow/detail-food/detail-food.component';


@NgModule({
  declarations: [
    HomeMerchantComponent,
    FoodListComponent,
    EditMerchantComponent,
    CreateFoodComponent,
    EditFoodComponent,
    UploadImageComponent,
    DetailMerchantComponent,
    EditMerchantBannerComponent,
    EditMerchantAvatarComponent,
    DetailFoodComponent,
  ],
  imports: [
    FormsModule,
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
