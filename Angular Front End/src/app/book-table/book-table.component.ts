import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {BookInfo} from './bookInfo';
import {CommentInfo} from './commentInfo';
import {Book} from './book';
import {Comment} from './comment';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit, OnChanges{
  bookUrl = `https://www.googleapis.com/books/v1/volumes?q=national-park&maxResults=40&key=AIzaSyD-4JKDQ-0EQ9hI-ZjdXVpztRJ6lf0KyT0`;
  books: Array<Book>;
  comments: Array<Comment>;
  commentUrl = '/api/reviews.json';
  bookTitle= "";
  bookId= "";
  
  @Input() searchText: any;

  constructor(private apiService: ApiService){
    this.books= [];
    this.comments=[];
  }

  showComments(id: string): void{
    console.log(id);
    this.comments = [];
    this.comments = this.apiService.getComments(id, this.comments);
  }
  

  searchBooks(input: string): void {
    
    this.books = this.apiService.searchBooks(input, this.books);
      
  }

  replaceSpacesWithDashes(text: string): string{
    text = text.replace(/\s+/g, '-');
    return text;
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchText && changes.searchText.currentValue) {
      this.books.splice(0,this.books.length);
      this.searchBooks(this.searchText);
    }
  }


  ngOnInit(): void {
    this.books = this.apiService.searchBooks("National Park", this.books);
  }
}
