import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, { path: 'ruleshome', loadChildren: () => import('./pages/rules/ruleshome/ruleshome.module').then(m => m.RuleshomeModule) }, { path: 'licenciasuno', loadChildren: () => import('./pages/licencias/licencia01/licencia01.module').then(m => m.Licencia01Module) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
