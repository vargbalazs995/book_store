import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../user/auth.service";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = true
  constructor(private authService: AuthService, private router: Router) {}





}
