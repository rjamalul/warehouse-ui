export class Crate {
    id :number;
    name :String;
    size :number;
    idWarehouses: number;
    //optional parameters having default values
    constructor(id = 0, size = 0, name = "", idWarehouses = 0){
        this.id=id;
        this.name=name;
        this.size=size;
        this.idWarehouses=idWarehouses;
    }
}