import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/components/login/login.component';
import { SignupComponent } from './modules/login/components/signup/signup.component';
import { NotfoundComponent } from './modules/login/components/notfound/notfound.component';
import { MainComponent } from './modules/dashboard/component/main/main.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  
  {path:'admin',component:MainComponent,loadChildren: ()=>import('./modules/dashboard/dashboardmodule/dashboardmodule.module').then(
    m=>m.DashboardmoduleModule
    )},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
