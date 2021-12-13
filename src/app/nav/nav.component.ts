import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../_services/options.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private optionsService : OptionsService) { }

  ngOnInit(): void {

  }

}
