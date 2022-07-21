import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeAvatar } from 'src/app/model/ChangeAvatar';
import { AuthService } from 'src/app/service/auth/auth.service';
import { TokenService } from 'src/app/service/token/token.service';
import {MerchantService} from "../../service/merchant/merchant.service";

@Component({
  selector: 'app-edit-merchant-banner',
  templateUrl: './edit-merchant-banner.component.html',
  styleUrls: ['./edit-merchant-banner.component.css']
})
export class EditMerchantBannerComponent implements OnInit {

  form: any = {};
  // @ts-ignore
  changeAvagtar: ChangeAvatar;
  error: any = {
    message: 'no'
  };
  success: any = {
    message: 'yes'
  };
  status = 'Please choose an image and click upload';

  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private merchantService: MerchantService,
              private router: Router) {
  }
  merchant: any;
  ngOnInit(): void {
    this.merchant = {
      name: '', phoneNumber: '', avatar: '', imageBanner: '',
      address: '',
    }
    this.getMerchant(1);
  }
  getMerchant(id: any) {
    this.merchantService.findById(id).subscribe((data) => {
      this.merchant = data;
    })
  }

  onSubmit() {
    this.changeAvagtar = new ChangeAvatar(this.form.avatar);
    this.merchantService.changeBanner(this.changeAvagtar).subscribe(data =>{
      if(JSON.stringify(data)==JSON.stringify(this.error)){
        this.status = 'Please upload Avatar!'
      }
      if(JSON.stringify(data)==JSON.stringify(this.success)){
        this.status = "Change Avatar success!";
        this.tokenService.setAvatar(this.form.avatar);
        window.location.reload();
      }
    }, error =>{
      this.status = "Change Avatar Fail!";
    })
  }

  onUploadAvatar($event: any) {
    // @ts-ignore
    document.getElementById("merchant-banner-edit").hidden = true;
    this.form.avatar = $event;
  }
}
