import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MerchantService {
  API = 'http://localhost:8080/merchants';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<any> {
    return this.httpClient.get(this.API);
  }

  findById(id: number): Observable<any> {
    return this.httpClient.get(this.API + '/' + id)
  }
}
