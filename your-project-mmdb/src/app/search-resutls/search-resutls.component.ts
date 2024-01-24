import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-resutls',
  templateUrl: './search-resutls.component.html',
  styleUrls: ['./search-resutls.component.css']
})
export class SearchResutlsComponent implements OnInit {
  
  movies: any[]= [1, 2, 3, 4];
  
  constructor() { }

  ngOnInit(): void {
  }

}
