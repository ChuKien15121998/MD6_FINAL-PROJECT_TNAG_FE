import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './homeshow/home/home.component';
import {MerchantRegisterComponent} from './auth/merchant-register/merchant-register.component';
import {UploadImageComponent} from "./upload/upload-image/upload-image.component";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment.prod";
import {CustomerRegisterComponent} from './auth/customer-register/customer-register.component';
import {MerchantManagementComponent} from "./admin/merchant-management/merchant-management.component";
import {NavbarComponent} from "./share/navbar/navbar.component";
import {FooterComponent} from "./share/footer/footer.component";
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import { CustomerLoginComponent } from './auth/customer-login/customer-login.component';
import { MerchantLoginComponent } from './auth/merchant-login/merchant-login.component';
import { httpInterceptorProviders } from "./security/auth.interceptor";
import { DetailMerchantManagementComponent } from './admin/detail-merchant-management/detail-merchant-management.component';
import { HomweUserComponent } from './user/homwe-user/homwe-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { DetailUserComponent } from './user/detail-user/detail-user.component';
import { NotAllowMerchantListComponent } from './admin/not-allow-merchant-list/not-allow-merchant-list.component';
import { ShowlistFoodComponent } from './homeshow/showlist-food/showlist-food.component';
import { ShowlistRestaurantComponent } from './homeshow/showlist-restaurant/showlist-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MerchantRegisterComponent,
    CustomerRegisterComponent,
    HomeComponent,
    CustomerLoginComponent,
    MerchantLoginComponent,
    ShowlistFoodComponent,
    ShowlistRestaurantComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AppRoutingModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ],
  exports: [

  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
