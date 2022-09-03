import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RuleshomeComponent } from './ruleshome.component';

const routes: Routes = [{ path: '', component: RuleshomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RuleshomeRoutingModule { }
