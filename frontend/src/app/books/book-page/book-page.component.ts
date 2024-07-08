import {Component, OnInit} from '@angular/core';
import {BookService} from "../book.service";
import {BookDetails, ModifiedBook} from "../book.model";

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  books:BookDetails[] = []
  selectedBook?:BookDetails;
  bookModify?: ModifiedBook ;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllBooks()
  }

  getAllBooks(): void {
    this.bookService.fetchAllBook().subscribe((book:BookDetails[]) => this.books =book)
  }

  receiveBook(id: string){
    this.bookService.getBookById(id).subscribe((book:ModifiedBook)=>{
      this.bookModify = book})
  }

  findBookById(id: string){
    this.bookService.getBookById(id).subscribe((book:BookDetails)=>{console.log(book)
      this.selectedBook = book})
  }

}
