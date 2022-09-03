import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RuleshomeRoutingModule } from './ruleshome-routing.module';
import { RuleshomeComponent } from './ruleshome.component';


@NgModule({
  declarations: [
    RuleshomeComponent
  ],
  imports: [
    CommonModule,
    RuleshomeRoutingModule
  ]
})
export class RuleshomeModule { }
