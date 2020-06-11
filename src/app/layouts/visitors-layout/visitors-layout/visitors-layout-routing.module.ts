import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeVisitorsComponent } from 'src/app/Pages/home-visitors/home-visitors.component';


const routes: Routes = [
  {
    path: 'user' ,
    component: HomeVisitorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorsLayoutRoutingModule { }
