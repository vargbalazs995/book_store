import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AuthGuard} from "./user/auth.guard";

const routes: Routes = [
  {path: "", component: MainPageComponent},
  {path: "book", loadChildren:()=> import('./books/book-routing.module').then((b) =>b.BookRoutingModule), canActivate:[AuthGuard]
  },
  {path: "", loadChildren:()=> import('./user/user-routing.module').then((u) =>u.UserRoutingModule)},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
