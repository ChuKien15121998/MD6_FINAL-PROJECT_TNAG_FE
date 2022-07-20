import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MerchantService } from 'src/app/service/merchant/merchant.service';


@Component({
  selector: 'app-edit-merchant',
  templateUrl: './edit-merchant.component.html',
  styleUrls: ['./edit-merchant.component.css']
})
export class EditMerchantComponent implements OnInit {
  form = new FormGroup( {
    // id: new FormControl(''),
    name: new FormControl(''),
    // phoneNumber: new FormControl(''),
    // avatar: new FormControl(''),
    // imageBanner: new FormControl(''),
    openTime: new FormControl(''),
    closeTime: new FormControl(''),
    address: new FormControl('')
  })

  constructor(private httpClient: HttpClient,
              private merchantService: MerchantService,
              private activateRoute: ActivatedRoute) { }
  obj: any;
  merchant: any;
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      // const id = paraMap.get('id');
      const id = 1;
      this.merchantService.getById(id).subscribe((data) => {
        this.merchant = data;
        console.log("detail====",data)
        // this.form.setValue(data.value)
        this.form = new FormGroup( {
          // id: new FormControl(data.id),
          name: new FormControl(data.name),
          // phoneNumber: new FormControl(data.phoneNumber),
          // avatar: new FormControl(data.avatar),
          // imageBanner: new FormControl(data.imageBanner),
          openTime: new FormControl(data.openTime),
          closeTime: new FormControl(data.closeTime),
          address: new FormControl(data.address)
        })
      })
    });
  }
  // editBanner($event: string) {
  //   // @ts-ignore
  //   document.getElementById("merchant-banner-edit").hidden = true;
  //   // @ts-ignore
  //   document.getElementById("merchant-banner-edit-label").hidden = true;
  //   this.form.value.imageBanner = $event;
  // }

  // editAvatar($event: string) {
  //   // @ts-ignore
  //   document.getElementById("merchant-avatar-edit").hidden = true;
  //   // @ts-ignore
  //   document.getElementById("merchant-avatar-edit-label").hidden = true;
  //   this.form.value.avatar = $event;
  //   this.merchant.avatar = this.form.value.avatar;
  // }
  update() {
    console.log(this.form.value);
    this.obj = {
      // id: this.form.value.id,
      name: this.form.value.name,
      // phoneNumber: this.form.value.phoneNumber,
      // avatar: this.form.value.avatar,
      // imageBanner: this.form.value.imageBanner,
      openTime: this.form.value.openTime,
      closeTime: this.form.value.closeTime,
      address: this.form.value.address,
    }
    this.merchantService.update(this.obj).subscribe(()=>{
      alert('Thành công');
      window.location.reload();
    }, error => {
      alert('Lỗi');
    })
  }

}
