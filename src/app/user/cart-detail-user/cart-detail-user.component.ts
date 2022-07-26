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
  ngOnInit(): void {
    this.cartService.getCartDetailByCartAndMerchant(this.merchant_id).subscribe((data) => {
      this.cartDetailByMerchant = data;
      console.log("detail 1 nha hang",this.cartDetailByMerchant)
    });
  }

}
