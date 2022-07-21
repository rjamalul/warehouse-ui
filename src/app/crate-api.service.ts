import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CrateApiService {
  http: HttpClient;
  baseUrl: string = 'http://localhost:8080/warehouse-service/crates';

  constructor(http: HttpClient) {
    this.http = http;
  }

  findAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
