import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeMerchantComponent} from "../merchant/home-merchant/home-merchant.component";
import {HomweUserComponent} from "./homwe-user/homwe-user.component";

const routes: Routes = [
  {path: '',
  component: HomweUserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
