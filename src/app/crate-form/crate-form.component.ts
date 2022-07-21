import { Component, Input, OnInit } from '@angular/core';
import { Crate } from '../models/Crate';
import { CrateApiService } from '../crate-api.service';

@Component({
  selector: 'app-crate-form',
  templateUrl: './crate-form.component.html',
  styleUrls: ['./crate-form.component.css']
})
export class CrateFormComponent implements OnInit {

  @Input() isEditing: boolean = false;
  crateFormData :Crate;
  crateApiService :CrateApiService;

  constructor(crateApiService :CrateApiService) {
    this.crateApiService = crateApiService;
    this.crateFormData = new Crate();
   }
    
  ngOnInit(): void {
  }

  submit(crate :Crate) :void {    
    this.crateApiService.addCrate(crate).subscribe(response => {      
      console.log(response);
    });
  }
}
