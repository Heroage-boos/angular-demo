import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  public myForm: any = {
    username: '',
    mobile: '',
  };
  constructor() {}

  ngOnInit(): void {}

  handlerForm(val: any) {
    console.log(val);
  }
}
