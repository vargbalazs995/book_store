import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BookCardComponent} from "./book-card/book-card.component";
import {BookPageComponent} from "./book-page/book-page.component";
import {BookCreateComponent} from "./book-create/book-create.component";
import {BookDetailsComponent} from "./book-details/book-details.component";

const routes: Routes = [
  {path:"", component: BookPageComponent},
  {path:"card", component: BookCardComponent},
  {path:"create", component: BookCreateComponent},
  {path: "details", component: BookDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
