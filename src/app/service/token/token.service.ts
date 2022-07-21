import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private roles: Array<string> = [];
  constructor() { }
  public getAvatar(): string {
    // return window.sessionStorage.getItem(AVATAR_KEY);
    return "https://firebasestorage.googleapis.com/v0/b/final-project-f1d55.appspot.com/o/je71nfuawil?alt=media&token=fa2da7b9-5189-4359-8e05-afa42187d497"
  }
  public setAvatar(avatar: string){
    window.sessionStorage.removeItem("https://firebasestorage.googleapis.com/v0/b/final-project-f1d55.appspot.com/o/je71nfuawil?alt=media&token=fa2da7b9-5189-4359-8e05-afa42187d497");
    window.sessionStorage.setItem("https://firebasestorage.googleapis.com/v0/b/final-project-f1d55.appspot.com/o/je71nfuawil?alt=media&token=fa2da7b9-5189-4359-8e05-afa42187d497", avatar);
  }
}
