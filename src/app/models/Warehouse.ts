export class Warehouse {

    warehouseId: number;
    warehouseName: string;
    currentCapacity: number;
    maxCapacity: number;

    constructor(warehouseId = 0, warehouseName = "" ,currentCapacity = 1, maxCapacity = 1) {
        this.warehouseId=warehouseId;
        this.warehouseName=warehouseName;
        this.currentCapacity=currentCapacity;
        this.maxCapacity=maxCapacity;
    }
    
}