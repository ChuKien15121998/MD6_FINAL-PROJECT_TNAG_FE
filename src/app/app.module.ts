import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MerchantRegisterComponent } from './auth/merchant-register/merchant-register.component';
import {UploadImageComponent} from "./upload/upload-image/upload-image.component";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment.prod";
import { CustomerRegisterComponent } from './auth/customer-register/customer-register.component';
import {MerchantManagementComponent} from "./admin/merchant-management/merchant-management.component";
import { MerchantLoginComponent } from './auth/merchant-login/merchant-login.component';
import { CustomerLoginComponent } from './auth/customer-login/customer-login.component';
import {FooterComponent} from "./share/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MerchantRegisterComponent,
    UploadImageComponent,
    CustomerRegisterComponent,
    MerchantManagementComponent,
    MerchantLoginComponent,
    CustomerLoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
