import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpserviceService } from './httpservice.service';
import {
  Subscription,
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'your-project-mmdb';

  skeletonArr = Array(5);
  keyupSubs!: Subscription;
  searchResults: any[] = [];
  notFound = false;

  constructor(private httpservice: HttpserviceService) {}

  ngOnInit(): void {
    this.keyupSubs = this.httpservice.keyupSubject
      .pipe(
        map((e: any) => e.target.value),
        filter(Boolean),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((search) => this.httpservice.fetchMovies(search))
      )
      .subscribe({
        next: (response: any) => {
          this.notFound = false;
          if (response?.results.length) {

            this.searchResults = response.results;
            
            } else {
            
            this.notFound = true;
          }
        },
        error: (err) => {},
      });
  }

  ngOnDestroy(): void {
    if (this.keyupSubs) this.keyupSubs.unsubscribe();
  }
}
