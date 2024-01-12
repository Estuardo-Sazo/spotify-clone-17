import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TracksRoutingModule
  ], exports: [
    TracksRoutingModule
  ]
})
export class TracksModule { }
