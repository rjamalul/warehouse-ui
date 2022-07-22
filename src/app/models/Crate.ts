export class Crate {
    crateId :number;
    crateSize :number;
    crateName :String;
    warehouseId: number;
    //optional parameters having default values
    constructor(crateId = 0, crateSize = 1, crateName = "", warehouseId = 0){
        this.crateId=crateId;
        this.crateSize=crateSize;
        this.crateName=crateName;
        this.warehouseId=warehouseId;
    }
}