import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Registration} from "../user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup = new FormGroup({
    username : new FormControl(),
    email : new FormControl(),
    password: new FormControl()
  })


  createUser (){
    const userData : Registration = {
      username : this.registerForm.value.username,
      email : this.registerForm.value.email,
      password: this.registerForm.value.password,
    }
    console.log(userData)
  }

}
