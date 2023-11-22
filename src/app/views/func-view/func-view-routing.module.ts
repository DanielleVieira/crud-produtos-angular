import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncViewComponent } from './func-view.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: 'lista-produtos',
    component: FuncViewComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncViewRoutingModule {}
