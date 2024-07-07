import {ReactiveFormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BookPageComponent} from "./book-page/book-page.component";
import {BookCardComponent} from "./book-card/book-card.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {BookRoutingModule} from "./book-routing.module";
import {BookCreateComponent} from "./book-create/book-create.component";
import { ReviewsComponent } from './book-details/reviews/reviews.component';


@NgModule({
  declarations: [BookCardComponent,BookPageComponent,BookDetailsComponent, BookCreateComponent, ReviewsComponent],
  imports: [CommonModule, ReactiveFormsModule, BookRoutingModule]
})
export class BookModule { }
