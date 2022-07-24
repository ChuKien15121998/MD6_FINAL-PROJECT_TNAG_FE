import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FoodMerchantService} from "../../service/merchant-food/food-merchant.service";
import {OwlOptions} from 'ngx-owl-carousel-o';

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
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    slideBy: 4,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class=\'fa fa-chevron-left\'></i>', '<i class=\'fa fa-chevron-right\'></i>'],
    responsive: {
      0: {
        items: 1
      },
      200: {
        items: 2
      },
      400: {
        items: 3
      },
      600: {
        items: 4
      }
    },
    nav: true
  }

}
