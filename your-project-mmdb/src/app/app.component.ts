import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpserviceService } from './httpservice.service';
import { Subscription, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'your-project-mmdb';   

  skeletonArr = Array(5)
  keyupSubs!: Subscription;
    
    constructor(private httpservice :HttpserviceService) {
    
    }


    ngOnInit(): void {

      this.keyupSubs = this.httpservice.keyupSubject
      .pipe(
        map((e:any)=> e.target.value),
        filter(Boolean),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((search) => this.httpservice.fetchMovies(search))
      )
      .subscribe(res=> 
        { 
          console.log(res);
        });
      
    } 
    
    ngOnDestroy(): void {
      if(this.keyupSubs) this.keyupSubs.unsubscribe()
    }
  }

