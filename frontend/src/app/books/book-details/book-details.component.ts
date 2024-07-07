import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  @Output() modify:EventEmitter<boolean> = new EventEmitter();

  modifyBook(){
    this.modify.emit(true);
  }

}
