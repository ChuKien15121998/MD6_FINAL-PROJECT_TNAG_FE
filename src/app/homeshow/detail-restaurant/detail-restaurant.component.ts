import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../service/token/token.service";

@Component({
  selector: 'app-detail-restaurant',
  templateUrl: './detail-restaurant.component.html',
  styleUrls: ['./detail-restaurant.component.css']
})
export class DetailRestaurantComponent implements OnInit {
  // // @ts-ignore
  // token: any;
  // // @ts-ignore
  // name: string;
  // isLogin = false;
  // // @ts-ignore
  // avatar: string;
  // admin = ["ADMIN"];
  // merchant = ["MERCHANT"];
  // user = ["USER"];
  // isCheckAdmin = false;
  // isMerchant = false;
  // isUser = false;

  constructor(
    // private tokenService: TokenService
  ) { }

  ngOnInit(): void {
  //   if (this.tokenService.getToken()) {
  //   // console.log("token lay ra", this.tokenService.getRoles())
  //   this.name = this.tokenService.getName();
  //   this.avatar = this.tokenService.getAvatar();
  //   this.isLogin = true;
  //   if (JSON.stringify(this.tokenService.getRoles()) == JSON.stringify(this.admin)) {
  //     // console.log("co check duoc role k")
  //     this.isCheckAdmin = true;
  //   } else { // @ts-ignore
  //     if (JSON.stringify(this.tokenService.getRoles()).includes(this.merchant) && JSON.stringify(this.tokenService.getRoles()).includes(this.user)) {
  //       this.isMerchant = true;
  //       this.isUser = true;
  //       // console.log("check merchant login hay chua", this.isMerchant)
  //     } else { // @ts-ignore
  //       if (JSON.stringify(this.tokenService.getRoles()).includes(this.merchant)) {
  //         // console.log("aaaaaaaaaaaaaa")
  //         this.isMerchant = true;
  //
  //       } else {
  //         this.isUser = true;
  //       }
  //     }
  //   }
  // }
  }

}
