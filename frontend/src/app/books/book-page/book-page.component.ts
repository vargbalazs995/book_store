import {Component, OnInit} from '@angular/core';
import {BookService} from "../book.service";
import {Router} from "@angular/router";
import {BookDetails} from "../book.model";

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  books:BookDetails[] = []
  selectedBook?:BookDetails;
  bookModify: boolean = false;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getAllBooks()
  }

  getAllBooks(): void {
    this.bookService.fetchAllBook().subscribe((book:BookDetails[]) => this.books =book)
  }

  receiveBook(book: boolean){
    this.bookModify = book;
  }

  findBookById(id: string){
    this.bookService.getBookById(id).subscribe((book:BookDetails)=>{
      this.selectedBook = book})
    this.router.navigate(['/book/'+id]);
  }
}
