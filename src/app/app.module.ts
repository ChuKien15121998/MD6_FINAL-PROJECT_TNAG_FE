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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodListComponent,
    NavbarComponent,
    FooterComponent,
    EditMerchantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
