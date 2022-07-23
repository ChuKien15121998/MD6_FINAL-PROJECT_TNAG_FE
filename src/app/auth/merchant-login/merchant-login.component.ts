import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {SignInForm} from "../../model/SignInForm";
import {AuthService} from "../../service/auth/auth.service";
import {TokenService} from "../../service/token/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-merchant-login',
  templateUrl: './merchant-login.component.html',
  styleUrls: ['./merchant-login.component.css']
})
export class MerchantLoginComponent implements OnInit {
  status = 'Please fill in the form to LOGIN -->';
  form: any = {};
  hide = true;
  isLogin = false;
  check = false;
  merchant = {authority:'MERCHANT'};
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  // @ts-ignore
  signInForm: SignInForm;
  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router) { }

  ngOnInit(): void {
    if (this.authService.getData()) {
      this.check = true;
    }
  }
  ngSubmit() {
    this.signInForm = new SignInForm(
      this.form.username,
      this.form.password
    )
    console.log("co submit duoc signin form k", this.signInForm)
    this.authService.signInMerchant(this.signInForm).subscribe(data => {
      console.log("signin form tra ve gi", data)
      if (data.token != undefined) {
        this.tokenService.setToken(data.token);
        this.tokenService.setName(data.name);
        this.tokenService.setRoles(data.roles);
        this.tokenService.setAvatar(data.avatar);
        console.log("lay role",JSON.stringify(data.roles))
        console.log(JSON.stringify(this.merchant))
        if (JSON.stringify(data.roles).includes(JSON.stringify(this.merchant))){
          console.log("role nhan vao la gi", data.roles)
          this.router.navigate(['merchant']).then(() => {
            window.location.reload();
            console.log("aaaaaaaaaaaaaa")
          });
        }else {
          this.isLogin = true;
          this.status = 'Đăng nhập không thành công! Bạn không có tài khoản bán hàng!'
        }
      } else {
        this.isLogin = true;
        this.status = 'Đăng nhập không thành công! Mật khẩu hoặc tên đăng nhập không đúng!'
      }
    })
  }

}
