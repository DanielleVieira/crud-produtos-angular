import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'adm',
    loadChildren: () =>
      import('./views/adm-view/adm-view.module').then((m) => m.AdmViewModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'func',
    loadChildren: () =>
      import('./views/func-view/func-view.module').then(
        (m) => m.FuncViewModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
