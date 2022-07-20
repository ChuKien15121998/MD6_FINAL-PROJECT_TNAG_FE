import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Food} from "../../model/food";

@Injectable({
  providedIn: 'root'
})
export class FoodMerchantService {
  API = 'http://localhost:8080/foods';

  constructor(private httpClient: HttpClient) {
  }

  findAll(id_merchant = 1): Observable<any> {
    return this.httpClient.get(this.API + '/' + id_merchant);
  }

  create(food: Food, id_merchant: number): Observable<any> {
    return this.httpClient.post(this.API + '/' + id_merchant, food)
  }
}
