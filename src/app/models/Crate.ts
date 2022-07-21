export class Crate {
    id :number;
    size :number;
    name :String;
    idWarehouses: number;
    //optional parameters having default values
    constructor(id = 0, size = 0, name = "", idWarehouses = 0){
        this.id=id;
        this.size=size;
        this.name=name;
        this.idWarehouses=idWarehouses;
    }
}