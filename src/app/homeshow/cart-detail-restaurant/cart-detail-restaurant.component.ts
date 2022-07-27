import {Component, Input, OnInit} from '@angular/core';
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

  @Input() restaurant_id: any;
  @Input() food_id: any;
  value: number = 0;
  cartDetail: any;
  constructor(private tokenService: TokenService,
              private activateRoute: ActivatedRoute,
              private cartService: CartService) { }
  ngOnInit(): void {
    this.cartService.getCartDetailByCartAndMerchant(this.restaurant_id).subscribe((data) => {
      // console.log("cartdetail lay duoc khong",data)
      this.cartDetail = data;
      // console.log("truyen data===========", this.cartDetail)
      for (let i = 0; i < this.cartDetail.length; i++) {
        // console.log("kieu du lieu", typeof(this.cartDetail[i].food.id))
        // console.log("kieu du lieu", typeof(parseInt(this.food_id)))
        // console.log("co id food cua cart k", this.cartDetail[i].food.id)
        // @ts-ignore
        if (this.cartDetail[i].food.id == parseInt(this.food_id)){
          // console.log("vao if nhuwng id nao")
          // console.log("kieu du lieu", typeof(this.cartDetail[i].quantity))
          // console.log(" so luowng lay ra", this.cartDetail[i].quantity)
          this.value = this.cartDetail[i].quantity;
        }else {
          this.value = 0;
        }
      }
      console.log("gia tri lay ra la", this.value)
    });
  }

}
