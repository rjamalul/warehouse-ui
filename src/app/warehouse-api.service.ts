import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Warehouse } from './models/Warehouse';

@Injectable({
  providedIn: 'root'
})

export class WarehouseApiService {
  http: HttpClient;
  

  constructor(http: HttpClient) {
    this.http = http;
  }

  getWarehouses(): Observable<any> {
    let baseUrl: string = 'http://localhost:8080/warehouse-service/warehouses';
    return this.http.get(baseUrl);
  }

  updateCrate(warehouse: Warehouse): Observable<any> {
    let baseUrl: string = 'http://localhost:8080/warehouse-service/crates/update';
    return this.http.post(baseUrl, JSON.stringify(warehouse));
  }
}
