import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  API = 'http://localhost:8080/carts';
  constructor(private httpClient: HttpClient) { }

  addToCart(food_id: any): Observable<any> {
    // @ts-ignore
    return this.httpClient.post(this.API+'/'+food_id);
  }
  decreaseFromCart(food_id: any): Observable<any> {
    // @ts-ignore
    return this.httpClient.put(this.API+'/decrease/'+food_id);
  }
  increaseFromCart(food_id: any): Observable<any> {
    // @ts-ignore
    return this.httpClient.put(this.API+'/increase/'+food_id);
  }
  getCartDetailByCartAndMerchant(merchant_id: any): Observable<any>{
    return this.httpClient.get(this.API + '/merchant/' + merchant_id);
  }
  getCartDetailByFood(food_id: any): Observable<any>{
    return this.httpClient.get(this.API + '/foods/' +food_id);
  }
}
