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
  crates :Array<Crate> = [];
  dummy: any;
  crateApiService :CrateApiService;

  //Angular sees the constructor and notices it has something for that
  constructor(crateApiService :CrateApiService) {
    //when it's constructed
    this.crateApiService = crateApiService;
  }

  ngOnInit(): void {
    // Get Crates
    this.crateApiService.findAll().subscribe(data => {
      this.crates = data;
    });

    // Add Crate
    let crate = new Crate(1, 1, "Dummy", 2);
    this.crateApiService.addCrate(crate).subscribe(response => {      
      console.log(response);
    });
  }
}
