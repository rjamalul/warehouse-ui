import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crate } from './models/Crate';

@Injectable({
  providedIn: 'root'
})
//The httprequest of any kind like get, post, delete etc.
export class CrateApiService {
  http: HttpClient;
  

  constructor(http: HttpClient) {
    this.http = http;
  }

  findAll(): Observable<any> {
    let baseUrl: string = 'http://localhost:8080/warehouse-service/crates';
    return this.http.get(baseUrl);
  }

  getCratesInWarehouse(warehouseId: number): Observable<any> {
    let httpheaders = new HttpHeaders().set('Content-type','application/Json');

    let options = {
      headers:httpheaders
    };

    let baseUrl: string = 'http://localhost:8080/warehouse-service/crates/warehouse?id=' + warehouseId;

    return this.http.get(baseUrl);    
  }

  addCrate(crate: Crate): Observable<any> {
    let baseUrl: string = 'http://localhost:8080/warehouse-service/crates';
    return this.http.post(baseUrl, JSON.stringify(crate));
  }

  deleteCrate(id: number, warehouseId: number): Observable<any> {
    let httpheaders = new HttpHeaders().set('Content-type','application/Json');

    let options = {
      headers:httpheaders
    };

    let baseUrl: string = 'http://localhost:8080/warehouse-service/crates?id=' + id + "&warehouseId=" + warehouseId;
    return this.http.delete(baseUrl, options);
  }

  updateCrate(crate: Crate): Observable<any> {
    let baseUrl: string = 'http://localhost:8080/warehouse-service/crates/update';
    return this.http.post(baseUrl, JSON.stringify(crate));
  }
}
