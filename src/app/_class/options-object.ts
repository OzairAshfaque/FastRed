import { IOptionsObject } from "../_interface/ioptions-object";

export class OptionsObject implements IOptionsObject {
    id: number;
    name: string;
    constructor(obj? : IOptionsObject){
        if(obj){
            this.id = obj.id;
            this.name = obj.name;
        }
    
    }

    clearObject()
    {
        this.id = null;
        this.name = null;
    }
}
