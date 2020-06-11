import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorsLayoutRoutingModule } from './visitors-layout-routing.module';
import { HomeVisitorsComponent } from 'src/app/Pages/home-visitors/home-visitors.component';
import { AppMaterialModule } from 'src/app/Material/materail.module';


@NgModule({
  declarations: [
    HomeVisitorsComponent
  ],
  imports: [
    CommonModule,
    VisitorsLayoutRoutingModule,
    AppMaterialModule
  ]
})
export class VisitorsLayoutModule { }
