import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookTableComponent } from './book-table/book-table.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookTableComponent
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
