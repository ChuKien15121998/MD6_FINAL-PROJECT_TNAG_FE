import {Component, Input, OnInit} from '@angular/core';
import {TokenService} from "../../service/token/token.service";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../service/cart/cart.service";

@Component({
  selector: 'app-cart-detail-user',
  templateUrl: './cart-detail-user.component.html',
  styleUrls: ['./cart-detail-user.component.css']
})
export class CartDetailUserComponent implements OnInit {
  @Input() merchant_id: any;
  constructor(private tokenService: TokenService,
              private activateRoute: ActivatedRoute,
              private cartService: CartService) { }
  cartDetailByMerchant: any;
  // @ts-ignore
  total = 0;
  ngOnInit(): void {
    this.getCartDetailByCartAndMerchant(this.merchant_id)
  }
  getCartDetailByCartAndMerchant(merchant_id: any){
    this.cartService.getCartDetailByCartAndMerchant(merchant_id).subscribe((data) => {
      this.cartDetailByMerchant = data;
      for (let i = 0; i < this.cartDetailByMerchant.length; i++) {
        // console.log("gia tung gio hang chi tiet",this.cartDetailByMerchant[i].totalPrice)
        this.total += this.cartDetailByMerchant[i].totalPrice;
        // console.log("gia tong ", this.total)
      }
      // console.log("detail 1 nha hang",this.cartDetailByMerchant)
    });
  }
  decreaseFromCart(id: any){
    this.cartService.decreaseFromCart(id).subscribe((data) => {
      this.getCartDetailByCartAndMerchant(this.merchant_id)
    })
  }
  increaseFromCart(id: any){
    this.cartService.increaseFromCart(id).subscribe((data) => {
      this.getCartDetailByCartAndMerchant(this.merchant_id)
    })
  }

}
