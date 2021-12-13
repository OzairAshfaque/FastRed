import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { OptionsObject } from '../_class/options-object';
import {map}from 'rxjs/operators';

import { OptionsService } from '../_services/options.service';
import { Options2Object } from '../_class/options2-object';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stationOptionsList : Array<OptionsObject>;
  $stationOptionObserver : Observable<OptionsObject>;
  searchStation :  FormControl;
  stationForm : FormGroup;
  revenueOptions : Options2Object;
  displayStation(item :OptionsObject){
    return item ? item.name : "";
  }
  constructor(private _formBuilder : FormBuilder, private optionsService : OptionsService) { }

  ngOnInit(): void {
    this.stationOptionsList = new Array<OptionsObject>();
    this.searchStation = new FormControl();
    this.getStationsList();
    this.stationForm = this._formBuilder.group({
      id : new FormControl(),
      name : new FormControl(),
    });
    this.$stationOptionObserver = this.searchStation.valueChanges.pipe(map(value => this._filerName(value)));
  }
getStationsList(){
  this.optionsService.getStationsOptions().subscribe(
    data => {
      this.stationOptionsList = data.options;
      console.log( this.stationOptionsList);
    },error =>{
      console.log(error);
    }
  ); 
}

getStationRevenue($event){
  var selectedStation = this.searchStation.value;
  this.optionsService.getRevenue(selectedStation.id).subscribe(data=>{
    this.revenueOptions = data;
    console.log(this.revenueOptions.value);

  },error=>{
    console.log(error);
    
  });
  console.log(selectedStation.id);
}

  private _filerName(stationName : string):any{
    const filterValue = stationName.toString().toLowerCase();
    return this.stationOptionsList.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  

}

