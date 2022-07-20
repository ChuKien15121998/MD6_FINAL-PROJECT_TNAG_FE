import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {EditMerchantComponent} from "./merchant/edit-merchant/edit-merchant.component";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FoodListComponent } from './merchant/food-list/food-list.component';
import {NavbarComponent} from "./share/navbar/navbar.component";
import {FooterComponent} from "./share/footer/footer.component";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {CreateFoodComponent} from "./merchant/create-food/create-food.component";
import { HomeMerchantComponent } from './merchant/home-merchant/home-merchant.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
