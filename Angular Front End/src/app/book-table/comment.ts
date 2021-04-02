export class Comment{
    bookId: string;
    name: string;
    review: string;
    rating: string;


  constructor(bookId: string, name: string, review: string, rating: string) {
    this.bookId = bookId;
    this.name = name;
    this.review = review
    this.rating = rating;
    
  }

 
}