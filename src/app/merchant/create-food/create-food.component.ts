import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {FoodMerchantService} from "../../service/merchant-food/food-merchant.service";
import {FoodCategoryService} from "../../service/food-category/food-category.service";

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.css']
})
export class CreateFoodComponent implements OnInit {

  listCategory: any;
  obj: any;


  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    priceDiscount: new FormControl(''),
    foodCategoryId: new FormControl(''),
    image: new FormControl(''),
  })

  constructor(private httpClient: HttpClient,
              private foodMerchantService: FoodMerchantService,
              private foodCategoryService: FoodCategoryService) {
  }

  ngOnInit(): void {
    this.findAllCategory();
  }

  findAllCategory() {
    this.foodCategoryService.findAll().subscribe((data) => {
      console.log('check data category -----------> ', data)
      console.log('check length data category -------------->> ', data.length)
      // for (let i = 0; i < data.length; i++) {
      //   this.listCategory.push(data[i].name)
      // }
      this.listCategory = data;
      console.log('check list category ----------->> ', this.listCategory);
    })

  }

  // @ts-ignore
  uploadImage($event) {
this.form.value.image = $event;
  }

  createFood() {
    this.obj = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      priceDiscount: this.form.value.priceDiscount,
      foodCategory: {
        id: this.form.value.foodCategoryId
      },
      image: this.form.value.image,
    }
    this.foodMerchantService.create(this.obj, 1).subscribe((data) => {
      console.log('check data trong createFood ------->> ', data)
      alert('Khởi tạo thành công!');
    }, error => {
      alert('Lỗi!');
    })
    console.log('check obj --------==>> ', this.obj)
  }


}
