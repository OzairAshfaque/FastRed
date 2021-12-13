import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighRevenueStationsComponent } from './high-revenue-stations/high-revenue-stations.component';
import { HomeComponent } from './home/home.component';
import { RepairableBikesComponent } from './repairable-bikes/repairable-bikes.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'repairable-bikes',component:RepairableBikesComponent},
  {path:'home',component:HomeComponent},
  {path:'high-revenue-stations',component:HighRevenueStationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
