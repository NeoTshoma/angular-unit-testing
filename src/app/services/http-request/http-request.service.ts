import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  baseUrl = 'https://itunes.apple.com/search?term';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  searchITunes(searchTerm: string,): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}=${searchTerm}`, this.httpOptions);
  }
  
}
