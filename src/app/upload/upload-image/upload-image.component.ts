import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  // @ts-ignore
  selectedFile: File;
  // @ts-ignore
  ref: AngularFireStorageReference;
  // @ts-ignore
  downloadURL: string
  checkUploadAvatar = false;
  @Output()
  giveURLtoCreate = new EventEmitter<string>();

  constructor(private afStorage: AngularFireStorage) {
  }

  ngOnInit(): void {
  }

  // @ts-ignore
  onFileChanged($event) {
    this.selectedFile = $event.target.files[0];
    this.onUpload();
  }

  onUpload() {
    this.checkUploadAvatar = true;
    const id = Math.random().toString(36).substring(2); // Tạo ra 1 name riêng cho mỗi DB firebase;
    this.ref = this.afStorage.ref(id);
    this.ref.put(this.selectedFile).then(snapshot => {
      return snapshot.ref.getDownloadURL(); // Tra ve 1 chuoi sieu van ban tren FB.
    }).then(downloadURL => { // chuyen giao link tu nhung component khac nhau khi su upload
      this.downloadURL = downloadURL;
      this.giveURLtoCreate.emit(this.downloadURL);
      this.checkUploadAvatar = false;
      console.log(downloadURL)
      return downloadURL;
    })
      .catch(error => {
        console.log(`Failed to upload avatar and get link ${error}`);
      });
  }

}
