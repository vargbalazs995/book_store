import { Component } from '@angular/core';
import {BookService} from "../book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {
  bookModify: boolean = false;

  constructor(private bookService: BookService, private router: Router) { }

  receiveBook(book: boolean){
    this.bookModify = book;
  }

  findBookById(id: string){
    this.router.navigate(['/book/'+id]);
  }
}
