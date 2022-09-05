import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Licencia01RoutingModule } from './licencia01-routing.module';
import { Licencia01Component } from './licencia01.component';


@NgModule({
  declarations: [
    Licencia01Component
  ],
  imports: [
    CommonModule,
    Licencia01RoutingModule
  ]
})
export class Licencia01Module { }
