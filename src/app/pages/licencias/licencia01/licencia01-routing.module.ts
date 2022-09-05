import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Licencia01Component } from './licencia01.component';

const routes: Routes = [{ path: '', component: Licencia01Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Licencia01RoutingModule { }
