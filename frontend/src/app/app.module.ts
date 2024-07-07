import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {BookRoutingModule} from "./books/book-routing.module";
import {UserRoutingModule} from "./user/user-routing.module";
import {BookModule} from "./books/book.module";
import {UserModule} from "./user/user.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    NotFoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BookRoutingModule,
    UserRoutingModule
  ],
  providers: [BookModule,UserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
