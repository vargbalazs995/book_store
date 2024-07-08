import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ModifiedBook, NewBook} from "../book.model";
import {BookService} from "../book.service";

@Component({
  selector: 'book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit{
  @Input() modify?: ModifiedBook;

  bookDetails = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  })

  constructor(private bookService: BookService) { }

  ngOnInit() {
    if(this.modify){
      this.bookDetails.patchValue({
        title : this.modify.title,
        author : this.modify.author,
        description : this.modify.description,
      })
    }
  }

  addBook(){
    const newBook: NewBook = {
      title: this.bookDetails.value.title,
      author: this.bookDetails.value.author,
      description: this.bookDetails.value.description,
    }
    this.bookService.postBook(newBook).subscribe()
 }

 modifyBook(){
   const modifiedBook: ModifiedBook = {
     title: this.bookDetails.value.title,
     author: this.bookDetails.value.author,
     description: this.bookDetails.value.description,
   }
   if(this.modify?._id){
   this.bookService.patchBookById(this.modify._id, modifiedBook).subscribe()}
 }

}
