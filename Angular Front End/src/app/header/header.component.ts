import { Component, OnInit } from '@angular/core';


@Component({

  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit{

  searchText = "";

  searchClick(input: string): void{
    this.searchText = input;
  }

  ngOnInit(): void {
  }

}
