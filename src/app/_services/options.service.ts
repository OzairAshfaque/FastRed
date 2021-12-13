import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OptionsObject } from '../_class/options-object';
import { Options2Object } from '../_class/options2-object';
import { IOptionsObject } from '../_interface/ioptions-object';
import { OptionsResponse } from '../_interface/options-response';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  baseUrl = environment.apiUrl;

  constructor(private httpClient : HttpClient) { }
  getStationsOptions(){
    return this.httpClient.get<OptionsResponse>(this.baseUrl+"api/option/getfromstationoption");
  }

  getRevenue(code : number){
    return this.httpClient.get<Options2Object>(this.baseUrl+"api/trip/getrevenuefromstation?code="+code);
  }

  getRepairBikes(){
    return this.httpClient.get<OptionsObject[]>(this.baseUrl+"api/trip/getrepairablebikes");
  }
}
