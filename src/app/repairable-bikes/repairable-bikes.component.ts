import { Component, OnInit } from '@angular/core';
import { OptionsObject } from '../_class/options-object';
import { OptionsService } from '../_services/options.service';

@Component({
  selector: 'app-repairable-bikes',
  templateUrl: './repairable-bikes.component.html',
  styleUrls: ['./repairable-bikes.component.css']
})
export class RepairableBikesComponent implements OnInit {

  repiarAbleBike : Array<OptionsObject>;

  constructor(private optionsService : OptionsService) { }

  ngOnInit(): void {
    this.optionsService.getRepairBikes().subscribe(
      data=>{
        this.repiarAbleBike = data;
        console.log(this.repiarAbleBike);
      },error=>{
        console.log(error);
      });
  }

}
