import { IHighRevenue } from "../_interface/ihigh-revenue";

export class HighRevenue implements IHighRevenue{
    stationId: number;
    stationName: string;
    revenue: string;

    constructor(obj:IHighRevenue){
        this.stationId = obj.stationId;
        this.stationName = obj.stationName;
        this.revenue = obj.revenue;
    }

    clear(){
        this.stationId = null;
        this.stationName = null;
        this.revenue = null;
    }

}
