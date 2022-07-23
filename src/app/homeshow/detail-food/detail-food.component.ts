import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {MerchantService} from "../../service/merchant/merchant.service";
import {FoodMerchantService} from "../../service/merchant-food/food-merchant.service";

@Component({
  selector: 'app-detail-food',
  templateUrl: './detail-food.component.html',
  styleUrls: ['./detail-food.component.css']
})
export class DetailFoodComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,
              private foodService: FoodMerchantService) { }
food: any;
  ngOnInit(): void {
    this.food = {
      name: '', image: '', description: '', price: '',
      priceDiscount: '',  foodCategory: '',  address: '',  merchant: {},
    }
    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      const id = paraMap.get('id');
    this.foodService.findById(id).subscribe((data) => {
      this.food = data;
    })
    });
  }

}
