import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Login, Registration} from "../user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    username : new FormControl(),
    password: new FormControl()
  })


  createUser (){
    const userData : Login = {
      username : this.loginForm.value.username,
      password: this.loginForm.value.password,
    }
    console.log(userData)
  }
}
