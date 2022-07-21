import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Merchant} from "../../model/merchant";

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

  save(merchant: Merchant): Observable<any> {
    return this.httpClient.post(this.API, merchant);
  }

  getById(id: any): Observable<any> {
    return this.httpClient.get(this.API + `/${id}`);
  }

  update(merchant: Merchant): Observable<any> {
    return this.httpClient.put(this.API + '/change-profile', merchant);
  }

  delete(id: any): Observable<any> {
    return this.httpClient.delete(this.API + `/${id}`);
  }
  updateActiveMerchant(id: number | undefined, status: any): Observable<any> {
    return this.httpClient.get(this.API+'/change-status'+`/${id}`+`/${status}`);
  }
  // @ts-ignore
  changeAvatar(info: any):Observable<JwtResponse>{
    // @ts-ignore
    return this.httpClient.put<JwtResponse>(this.API + '/change-avatar', info);
  }

  updateGoldMerchant(id: number | undefined, status: any): Observable<any> {
    return this.httpClient.get(this.API+`/change-gold-status`+`/${id}`+`/${status}`);
  }
}
