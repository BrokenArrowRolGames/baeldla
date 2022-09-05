import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Licencia02Component } from './licencia02.component';

const routes: Routes = [{ path: '', component: Licencia02Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Licencia02RoutingModule { }
