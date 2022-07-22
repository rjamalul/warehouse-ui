import { Component, OnInit, Output } from '@angular/core';
import { CrateApiService } from '../crate-api.service';
import { Crate } from '../models/Crate';
import { Warehouse } from '../models/Warehouse';
import { WarehouseApiService } from '../warehouse-api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  crateFormData: Crate;
  crateEditFormData: Crate;
  value :string = 'Hello'  
  crates :Array<Crate> = [];
  warehouses :Array<Warehouse> = [];
  dummy: any;
  crateApiService: CrateApiService;
  warehouseApiService: WarehouseApiService;
  isEditing: boolean = false;
  warehouseId: number = -1;
  warehouse: Warehouse;

  //Angular sees the constructor and notices it has something for that
  constructor(crateApiService :CrateApiService, warehouseApiService: WarehouseApiService) {
    //when it's constructed
    this.crateApiService = crateApiService;
    this.warehouseApiService = warehouseApiService;
    this.crateFormData = new Crate();
    this.crateEditFormData = new Crate();
    this.warehouse = new Warehouse();
  }

  ngOnInit(): void {
    // this.findAll();
    this.getWarehouses();    
  }

  findAll() {
    // Get Crates
    this.crateApiService.findAll().subscribe(data => {
      this.crates = data;
    });
  }

  getWarehouses() {
    this.warehouseApiService.getWarehouses().subscribe(data => {
      this.warehouses = data;
    });
  }

  delete(id: any) : void {
    id = Number(id);
    this.crateApiService.deleteCrate(id).subscribe(response => {      
      this.getCratesByWarehouseId(this.warehouseId);      
    });
  }

  submit(crate :Crate) :void {    
    this.crateApiService.addCrate(crate).subscribe(response => {      
      this.getCratesByWarehouseId(this.warehouseId);      
    });
  }

  edit(crate: Crate) : void {    
    this.crateApiService.updateCrate(crate).subscribe(response => {      
      this.isEditing = false;
      this.getCratesByWarehouseId(this.warehouseId);      
    });
  }

  editValues(crate: Crate): void {
    this.isEditing = true;
    this.crateEditFormData = Object.assign({}, crate);;
  }

  cancelEdit(): void {
    this.isEditing = false;
  }

  getCratesInWarehouse(warehouseId: string): void {
    console.log(warehouseId);
    this.warehouseId = Number(warehouseId);
    this.getCratesByWarehouseId(Number(this.warehouseId));
  }

  getCratesByWarehouseId(warehouseId: number) {
    this.getWarehouse(warehouseId);
    this.crateApiService.getCratesInWarehouse(warehouseId).subscribe(data => {
      this.crates = data;
    });
  }

  getWarehouse(warehouseId: number) {
    let tempWarehouses = this.warehouses.filter(function(warehouse){
      return (warehouse.warehouseId == warehouseId);
    })

    this.warehouse = tempWarehouses[0];
    this.getWarehouse(this.warehouseId);
  }
}