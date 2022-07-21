import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Food} from "../../model/food";
import {Merchant} from "../../model/merchant";

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

  delete(id: number): Observable<any> {
    // @ts-ignore
    return this.httpClient.put(this.API + '/delete-food/' + id)
  }

  findById(id: any): Observable<any> {
    return this.httpClient.get(this.API + '/food-id/' + id)
  }

  update(id: any, food: Food): Observable<any> {
    return this.httpClient.put(this.API + '/update-food/' + id, food);
  }

  searchByFoodName(name: string, id: number): Observable<any> {
    return this.httpClient.get(this.API + '/' + id + '/search-by-food-name' + '?name=' + name);
  }
}
