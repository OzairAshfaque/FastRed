import { Component, OnInit } from '@angular/core';
import { HighRevenue } from '../_class/high-revenue';
import { HighRevenueService } from '../_services/high-revenue.service';
import { OptionsService } from '../_services/options.service';

@Component({
  selector: 'app-high-revenue-stations',
  templateUrl: './high-revenue-stations.component.html',
  styleUrls: ['./high-revenue-stations.component.css']
})
export class HighRevenueStationsComponent implements OnInit {
  TopStationsList : HighRevenue;
  constructor(private highRevenueService : HighRevenueService, private optionsService : OptionsService) { }
  
  ngOnInit(): void {
    this.highRevenueService.getHighRevenueStations().subscribe(
      data =>{
        this.TopStationsList = data;
        console.log(this.TopStationsList);
    },error=>{
      console.log(error);
    });
  }
   

}
