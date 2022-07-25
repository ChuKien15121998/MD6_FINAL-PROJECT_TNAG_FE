import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {TokenService} from "../../service/token/token.service";
import {CartService} from "../../service/cart/cart.service";
import {CartDetail} from "../../model/CartDetail";

@Component({
  selector: 'app-cart-detail-restaurant',
  templateUrl: './cart-detail-restaurant.component.html',
  styleUrls: ['./cart-detail-restaurant.component.css']
})
export class CartDetailRestaurantComponent implements OnInit {
  // @ts-ignore
  token: any;
  // @ts-ignore
  name: string;
  isLogin = false;
  // @ts-ignore
  avatar: string;
  admin = ["ADMIN"];
  merchant = ["MERCHANT"];
  user = ["USER"];
  isCheckAdmin = false;
  isMerchant = false;
  isUser = false;

  count: any;
  // @ts-ignore
  cartDetail: CartDetail[];
  constructor(private tokenService: TokenService,
              private activateRoute: ActivatedRoute,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      const id = paraMap.get('id');
      this.cartService.getCartDetailByFood(id).subscribe((data) => {
        this.cartDetail = data;
        console.log("cartdetail lay duoc khong",data)
      })
    });

    if (this.tokenService.getToken()) {
      // console.log("token lay ra", this.tokenService.getRoles())
      this.name = this.tokenService.getName();
      this.avatar = this.tokenService.getAvatar();
      this.isLogin = true;
      if (JSON.stringify(this.tokenService.getRoles()) == JSON.stringify(this.admin)) {
        // console.log("co check duoc role k")
        this.isCheckAdmin = true;
      } else { // @ts-ignore
        if (JSON.stringify(this.tokenService.getRoles()).includes(this.merchant) && JSON.stringify(this.tokenService.getRoles()).includes(this.user)) {
          this.isMerchant = true;
          this.isUser = true;
          // console.log("check merchant login hay chua", this.isMerchant)
        } else { // @ts-ignore
          if (JSON.stringify(this.tokenService.getRoles()).includes(this.merchant)) {
            // console.log("aaaaaaaaaaaaaa")
            this.isMerchant = true;

          } else {
            this.isUser = true;
          }
        }
      }
    }
  }

}
