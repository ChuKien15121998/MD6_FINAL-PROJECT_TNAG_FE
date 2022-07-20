import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MerchantRegisterComponent } from './auth/merchant-register/merchant-register.component';
import {UploadImageComponent} from "./upload/upload-image/upload-image.component";
import {CustomerRegisterComponent} from "./auth/customer-register/customer-register.component";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MerchantRegisterComponent,
        UploadImageComponent,
        CustomerRegisterComponent
    ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
