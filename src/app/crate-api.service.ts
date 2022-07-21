import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crate } from './models/Crate';

@Injectable({
  providedIn: 'root'
})

export class CrateApiService {
  http: HttpClient;
  

  constructor(http: HttpClient) {
    this.http = http;
  }

  findAll(): Observable<any> {
    let baseUrl: string = 'http://localhost:8080/warehouse-service/crates';
    return this.http.get(baseUrl);
  }

  addCrate(crate: Crate): Observable<any> {
    let baseUrl: string = 'http://localhost:8080/warehouse-service/crates';
    return this.http.post(baseUrl, JSON.stringify(crate));
  }
}
