import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ModifiedBook, NewBook} from "../book.model";

@Component({
  selector: 'book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent {
  @Input() modify: boolean = false;

  bookDetails = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  })

 addBook(){
    const newBook: NewBook = {
      title: this.bookDetails.value.title,
      author: this.bookDetails.value.author,
      description: this.bookDetails.value.description,
    }
    console.log(newBook)
 }

 modifyBook(){
   const modifiedBook: ModifiedBook = {
     title: this.bookDetails.value.title,
     author: this.bookDetails.value.author,
     description: this.bookDetails.value.description,
   }
 }

 receiveBook(book: boolean){
    this.modify = book
 }

}
