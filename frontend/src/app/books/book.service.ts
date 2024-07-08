import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BookDetails} from "./book.model";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl:string = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { }

  fetchAllBook(){
    return this.http.get<BookDetails[]>(this.apiUrl)
  }

  getBookById(id: string) {
    return this.http.get<BookDetails>(this.apiUrl+`/${id}`)
  }

  deleteBookById(id: string) {
    return this.http.delete<BookDetails>(this.apiUrl+`/${id}`)
  }
}
