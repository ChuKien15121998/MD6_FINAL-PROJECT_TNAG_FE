import { Component, OnInit } from '@angular/core';
import { ChangeAvatar } from 'src/app/model/ChangeAvatar';

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
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.changeAvagtar = new ChangeAvatar(
      this.form.avatar
    );

    this.authService.changeAvatar(this.changeAvagtar).subscribe(data =>{
      if(JSON.stringify(data)==JSON.stringify(this.error)){
        this.status = 'Please upload Avatar!'
      }
      if(JSON.stringify(data)==JSON.stringify(this.success)){
        this.status = "Change Avatar success!";
        this.tokenService.setAvatar(this.form.avatar);
        window.location.reload();
      }
    }, error =>{
      alert('Change avatar Failed!')
    })
  }

  onUploadAvatar($event) {
    this.form.avatar = $event;
  }
}
