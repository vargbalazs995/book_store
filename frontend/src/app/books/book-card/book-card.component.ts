import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BookDetails} from "../book.model";

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() book?: BookDetails[];
  @Output() bookdId:EventEmitter<string> = new EventEmitter<string>();


  submitBookId(id:string){
    this.bookdId.emit(id)
  }

}
