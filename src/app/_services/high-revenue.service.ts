import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HighRevenue } from '../_class/high-revenue';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HighRevenueService {
  baseUrl = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }

  getHighRevenueStations(){
    return this.httpClient.get<HighRevenue>(this.baseUrl+"api/trip/gettopthreestations");
    }
}
