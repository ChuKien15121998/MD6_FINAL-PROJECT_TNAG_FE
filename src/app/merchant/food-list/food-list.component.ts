import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FoodMerchantService} from "../../service/merchant-food/food-merchant.service";
import {MerchantService} from "../../service/merchant/merchant.service";

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  listFoodMerchant: any;
  listMerchant: any;
  merchant: any;
  merchant_name: any;
  p: any;

  constructor(private  httpClient: HttpClient,
              private foodMerchantService: FoodMerchantService,
              private merchantService: MerchantService) { }

  ngOnInit(): void {
    this.findAllMerchant();
    this.findAllByMerchant();
  }

  checkMerchant() {
    for (let i = 0; i < this.listMerchant.length; i++) {
      if (this.listMerchant[i].get().getId() == 1) {
        this.merchant = this.listMerchant[i].get();
      }
    }
  }

  findAllMerchant() {
    this.merchantService.getCurrentMerchant().subscribe((data) => {
      this.merchant = data;
      console.log('check listMerchant ------>> ', data)

    })
  }

  findAllByMerchant() {
    this.foodMerchantService.findAll().subscribe((data) => {
      this.listFoodMerchant = data;
      console.log('check data ------>> ', data)
      console.log('check thang list food ==>> ', this.listFoodMerchant)
    })
  }

  deleteFood(id: number) {
    this.foodMerchantService.delete(id).subscribe((data) => {
      console.log('check thang vua xoa ----->', data)
      console.log('check thu id ----->> ', id)
      alert('xoa thanh cong!!')
      this.findAllByMerchant()
    })

  }

}
