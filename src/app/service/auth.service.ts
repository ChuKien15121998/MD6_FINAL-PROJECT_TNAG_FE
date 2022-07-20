import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {SignUpFormMerchant} from "../model/SignUpFormMerchant";
import {Observable} from "rxjs";
import {SignUpFormCustomer} from "../model/SignUpFormCustomer";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private data?: boolean;
  // API LOCAL
  private  API_SIGNUP_MERCHANT = environment.API_LOCAL + 'merchant/signup';
  private API_SIGNUP_CUSTOMER = environment.API_LOCAL + 'customer/signup';
  private ADDRESS_CATEGORY = environment.API_LOCAL + 'address-category';


  constructor(private http: HttpClient) { }

  signUpMerchant (signUpMerchant: SignUpFormMerchant): Observable<any> {
    return this.http.post<any>(this.API_SIGNUP_MERCHANT, signUpMerchant);
  }

  signUpCustomer (signUpCustomer: SignUpFormCustomer): Observable<any> {
    return this.http.post<any>(this.API_SIGNUP_CUSTOMER, signUpCustomer);
  }

  listAddressCategory(): Observable<any> {
    return this.http.get<any>(this.ADDRESS_CATEGORY);
  }

  getData(): boolean {
    // @ts-ignore
    return this.data;
  }

  setData(value: boolean) {
    this.data = value;
  }
}
