export class Book{
    id: string;
    publishedDate: string;
    subtitle: string;
    title: string;


  constructor(id: string, publishedDate: string, subtitle: string, title: string) {
    this.id = id;
    this.publishedDate = publishedDate;
    this.title = title;
    if(subtitle){
        this.subtitle = subtitle;
    }else{
        this.subtitle = "There is no description for this book";
    }
  }

 
}