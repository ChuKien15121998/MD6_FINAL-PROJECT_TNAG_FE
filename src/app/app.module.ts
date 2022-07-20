import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MerchantRegisterComponent } from './auth/merchant-register/merchant-register.component';
import {UploadImageComponent} from "./upload/upload-image/upload-image.component";
<<<<<<< HEAD
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
=======
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment.prod";
import { CustomerRegisterComponent } from './auth/customer-register/customer-register.component';
import {MerchantManagementComponent} from "./admin/merchant-management/merchant-management.component";
import { MerchantLoginComponent } from './auth/merchant-login/merchant-login.component';
import { CustomerLoginComponent } from './auth/customer-login/customer-login.component';
import {NavbarComponent} from "./share/navbar/navbar.component";
import {FooterComponent} from "./share/footer/footer.component";
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    NavbarComponent,
    MerchantManagementComponent,
    FooterComponent,
    MerchantRegisterComponent,
    UploadImageComponent,
    CustomerRegisterComponent,
    MerchantLoginComponent,
    CustomerLoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    AppRoutingModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
>>>>>>> 63e3fcde5ab9b266c5dc42e890a07b77f6534228
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
