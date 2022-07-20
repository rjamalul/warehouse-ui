export class Crate {
    idcrate :number;
    crateName :String;
    crateSize :number;

    //optional parameters having default values
    constructor(idcrate = 0, crateName = "", crateSize = 0){
        this.idcrate=idcrate;
        this.crateName=crateName;
        this.crateSize=crateSize;

    }
}