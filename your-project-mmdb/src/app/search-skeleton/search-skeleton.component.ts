import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-skeleton',
  templateUrl: './search-skeleton.component.html',
  styleUrls: ['./search-skeleton.component.css']
})
export class SearchSkeletonComponent implements OnInit {
  
  @Input() skeletons: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
