import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UploadImageComponent} from "../upload/upload-image/upload-image.component";
import {HomweUserComponent} from "./homwe-user/homwe-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {DetailUserComponent} from "./detail-user/detail-user.component";
import {ReactiveFormsModule} from "@angular/forms";
import { ListcartUserComponent } from './listcart-user/listcart-user.component';
import {NgxPaginationModule} from "ngx-pagination";
import { OrderUserComponent } from './order-user/order-user.component';


@NgModule({
  declarations: [
    HomweUserComponent,
    EditUserComponent,
    DetailUserComponent,
    ListcartUserComponent,
    OrderUserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class UserModule { }
