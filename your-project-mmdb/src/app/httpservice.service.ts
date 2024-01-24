import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  public keyupSubject = new Subject<any>()
  constructor(private httpClient: HttpClient) { }

  fetchMovies (search: string): Observable<any>{
    return this.httpClient.get<any>(environment.endpoint + search);
  }
  
  
}