import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BookDetails} from "../book.model";
import {BookService} from "../book.service";

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  @Output() modifyId:EventEmitter<string> = new EventEmitter();
  @Input() receivedBook?: BookDetails;

  constructor(private bookService: BookService) {}

  modifyBook(id:string){
    this.modifyId.emit(id)
  }

  deleteBook(id: string){
    this.bookService.deleteBookById(id).subscribe()
}
}
