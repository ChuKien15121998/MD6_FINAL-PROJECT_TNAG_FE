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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateFoodComponent} from "./merchant/create-food/create-food.component";
import { HomeMerchantComponent } from './merchant/home-merchant/home-merchant.component';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment.prod";
import {UploadImageComponent} from "./upload/upload-image/upload-image.component";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireStorageModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
