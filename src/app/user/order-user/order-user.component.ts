import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrderService} from "../../service/order/order.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-order-user',
  templateUrl: './order-user.component.html',
  styleUrls: ['./order-user.component.css']
})
export class OrderUserComponent implements OnInit {

  listOrder: any;
  p: string | number | undefined;
  constructor(private httpClient: HttpClient,
              private orderService: OrderService) { }

  ngOnInit(): void {
    this.showListOrderOfUser();
  }

  showListOrderOfUser(){
    this.orderService.showOrderListOfCustomer().subscribe(data => {
      console.log(data)
      this.listOrder = data;
    })
  }

}
