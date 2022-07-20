import { Injectable } from '@angular/core';
import { Crate } from './models/Crate'

@Injectable({
  providedIn: 'root'
})
export class CrateApiService {

  constructor() { }
  findAll() :Array<Crate> {
    return [new Crate(1, "Food", 500), new Crate(2, "Clothes", 250), new Crate(3, "Food", 500)]
  }
}
