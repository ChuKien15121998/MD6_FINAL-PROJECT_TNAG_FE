import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  API = 'http://localhost:8080/orders';
  anything: any;

  constructor(private httpClient: HttpClient) {
  }

  showOrderListOfCustomer(): Observable<any>{
    return this.httpClient.get(this.API + `/customer-order`);
  }

  showWaitingOrder(): Observable<any>{
    return this.httpClient.get(this.API + `/status/3`);
  }

  showAcceptedOrder(): Observable<any>{
    return this.httpClient.get(this.API + `/status/1`);
  }

  showDeniedOrder(): Observable<any>{
    return this.httpClient.get(this.API + `/status/2`);
  }

  acceptOrder(orderId: number): Observable<any>{
    return this.httpClient.put(this.API + `/${orderId}/accept`, this.anything);
  }

  deny(orderId: number): Observable<any>{
    return this.httpClient.put(this.API + `/${orderId}/deny`, this.anything);
  }

  searchOrder(search: any): Observable<any>{
    return this.httpClient.get(this.API + `/search-all/${search}`);
  }

  showOrderListOfMerchant(): Observable<any>{
    return this.httpClient.get(this.API + `/merchant-order`)
  }

  searchDenyOrder(search: any): Observable<any>{
    return this.httpClient.get(this.API + `/search-denied/${search}`)
  }

  searchAcceptOrder(search: any): Observable<any>{
    return this.httpClient.get(this.API + `/search-accepted/${search}`)
  }

  searchWaitingOrder(search: any): Observable<any>{
    return this.httpClient.get(this.API + `/search-wait/${search}`)
  }
}
