import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  API = 'http://localhost:8080/orders';

  constructor(private httpClient: HttpClient) { }

  findAllByPriceTotalOrderByCreateAt(id: number, year: number): Observable<any> {
    return this.httpClient.get(this.API + '/merchant-chart/' + id + '/' + year)
  }
}


