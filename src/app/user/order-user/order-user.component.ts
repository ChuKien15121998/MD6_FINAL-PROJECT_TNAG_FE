import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FoodMerchantService} from "../../service/merchant-food/food-merchant.service";
import {CartService} from "../../service/cart/cart.service";
import {OrderService} from "../../service/orders/order.service";

@Component({
  selector: 'app-order-user',
  templateUrl: './order-user.component.html',
  styleUrls: ['./order-user.component.css']
})
export class OrderUserComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,
              private orderService: OrderService,
              ) { }
listOrder: any;
  listOderStatus: any;
  ngOnInit(): void {
    // this.getListStatus();
    this.findAllOrderOfCustomer();
  }
  findAllOrderOfCustomer(){
    this.orderService.findAllOrderOfCustomer().subscribe((data) => {
      this.listOrder = data;
      console.log("listoder lay ra", this.listOrder)
    })
  }
  getListStatus(){
    this.orderService.getListStatus().subscribe((data) => {
      this.listOderStatus = data;
    })
  }

}
