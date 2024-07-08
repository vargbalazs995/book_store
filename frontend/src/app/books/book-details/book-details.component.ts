import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BookDetails} from "../book.model";
import {BookService} from "../book.service";

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  @Output() modify:EventEmitter<boolean> = new EventEmitter();
  @Output() modifyId:EventEmitter<string> = new EventEmitter();
  @Input() receivedBook?: BookDetails;

  constructor(private bookService: BookService) {}

  modifyBook(id:string){
    this.modifyId.emit(id)
    this.modify.emit(true);
  }

  deleteBook(id: string){
    this.bookService.deleteBookById(id)
}
}
