import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UserComponent} from "./user.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {RegisterComponent} from "./register/register.component";
import {UserRoutingModule} from "./user-routing.module";

@NgModule({
  declarations: [UserComponent,LoginComponent,ProfileComponent, RegisterComponent],
  imports: [CommonModule, ReactiveFormsModule, UserRoutingModule]
})
export class UserModule { }
