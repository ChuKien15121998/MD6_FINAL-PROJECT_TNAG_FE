import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // @ts-ignore
  name: string;
  isLogin = false;
  // @ts-ignore
  avatar: string;
  admin = ["ADMIN"];
  merchant = ["MERCHANT"];
  isCheckAdmin = false;
  isMerchant = false;
  isUser = false;
  ngOnInit(): void {
    console.log('token ==> ', this.tokenService.getToken())
    if(this.tokenService.getToken()){
      this.name = this.tokenService.getName();
      this.avatar = this.tokenService.getAvatar();
      this.isLogin = true;
      if(JSON.stringify(this.tokenService.getRoles())==JSON.stringify(this.admin)){
        this.isCheckAdmin = true;
      }else if (JSON.stringify(this.tokenService.getRoles())==JSON.stringify(this.merchant)){
        this.isMerchant = true;
      }else {
        this.isUser = true;
      }
    }
  }
  constructor(private tokenService: TokenService) {
  }
}
