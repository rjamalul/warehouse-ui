import { Component, OnInit } from '@angular/core';
import { CrateApiService } from '../crate-api.service';
import { Crate } from '../models/Crate';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  value :string = 'Hello'
  
  crates :Array<Crate> = []
  crateApiService :CrateApiService;

 //Angular sees the constructor and notices it has something for that
  constructor(crateApiService :CrateApiService) {
    //when it's constructed
    this.crateApiService = crateApiService;
   }

  ngOnInit(): void {
    //do something when initialized
    this.crates = this.crateApiService.findAll();
  }

}
