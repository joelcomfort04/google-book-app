import { Injectable } from '@angular/core';
import { Book } from './book-table/book';
import { BookInfo } from './book-table/bookInfo';
import { HttpClient } from '@angular/common/http';
import { CommentInfo } from './book-table/commentInfo';
import { Comment } from './book-table/comment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiKey: string;

  constructor(private http: HttpClient) 
  {
    this.apiKey = "AIzaSyD-4JKDQ-0EQ9hI-ZjdXVpztRJ6lf0KyT0";
  }


  searchBooks(input: string, books: Array<Book>): Array<Book> {
    
    this.http.get<BookInfo>(`https://www.googleapis.com/books/v1/volumes?q=intitle:${input}&maxResults=40&key=${this.apiKey}`).subscribe(
      data => {
        
        for(let i = 0; i < data.items.length; i++){
          
              let book = new Book(data.items[i].id, data.items[i].volumeInfo.publishedDate, data.items[i].volumeInfo.subtitle, data.items[i].volumeInfo.title);
                books.push(book);
          }
          return books;
      },
      err => {
        console.log("Error occured.")
        return books;
      });
      
      return books;
  }

  getComments(bookId: string, comments: Array<Comment>): Array<Comment>{
    this.http.get<CommentInfo>(`http://localhost:5000/api/book/${bookId}`).subscribe(
      data => {
        console.log(data);
        for(let i = 0; i < data.CommentList.length; i++){
              
              console.log(data.CommentList[0]);
              let comment = new Comment(data.CommentList[i].BookId, data.CommentList[i].Name, data.CommentList[i].Review, data.CommentList[i].Rating);
                comments.push(comment);
          }
          console.log(comments);
          return comments;
      },
      err => {
        console.log("Error occured.")
        return comments;
      });
      

    return comments;
  }
}
