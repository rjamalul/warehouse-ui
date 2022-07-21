import { Component, OnInit } from '@angular/core';
import { CrateApiService } from '../crate-api.service';
import { Crate } from '../models/Crate';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  crateFormData :Crate;
  value :string = 'Hello'  
  crates :Array<Crate> = [];
  dummy: any;
  crateApiService :CrateApiService;

  //Angular sees the constructor and notices it has something for that
  constructor(crateApiService :CrateApiService) {
    //when it's constructed
    this.crateApiService = crateApiService;
    this.crateFormData = new Crate();
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    // Get Crates
    this.crateApiService.findAll().subscribe(data => {
      this.crates = data;
    });
  }

  delete(id: any) : void {
    id = Number(id);
    this.crateApiService.deleteCrate(id).subscribe(response => {      
      this.findAll();      
    });
  }

  submit(crate :Crate) :void {    
    this.crateApiService.addCrate(crate).subscribe(response => {      
      this.findAll();
    });
  }

  edit(crate: Crate) : void {    
    this.crateApiService.updateCrate(crate).subscribe(response => {      
      this.findAll();
    });
  }
}