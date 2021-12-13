import { Options2 } from "../_interface/options2";

export class Options2Object implements Options2 {
    key: string;
    value: string;
    constructor(obj? : Options2){
        if(obj){
            this.key = obj.key;
            this.value = obj.value;
        }
    
    }
   

    clearObject()
    {
        this.key = null;
        this.value = null;
    }
}
