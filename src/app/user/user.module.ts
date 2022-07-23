import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UploadImageComponent} from "../upload/upload-image/upload-image.component";
import {HomweUserComponent} from "./homwe-user/homwe-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {DetailUserComponent} from "./detail-user/detail-user.component";


@NgModule({
  declarations: [
    HomweUserComponent,
    EditUserComponent,
    DetailUserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
