import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API = 'http://localhost:8080/foods'

  constructor(private httpClient: HttpClient) { }

  showAllListFood(): Observable<any>{
    return this.httpClient.get(this.API);
  }


}
