import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../component/main/main.component';
import { AboutComponent } from '../component/about/about.component';

const routes: Routes = [
  {path:'dashboard',component:MainComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardmoduleRoutingModule { }
