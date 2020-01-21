import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  public imgUrl:string;
  constructor() { }

  ngOnInit() {
    this.imgUrl = 'assets/img/Group_5_1.png'  //../../assets/img/Group_5_1.png
  }

}
