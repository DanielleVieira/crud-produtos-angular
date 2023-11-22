import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmViewComponent } from './adm-view.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AdicinaProdutoComponent } from 'src/app/components/adicina-produto/adicina-produto.component';

const routes: Routes = [
  {
    path: 'lista-produtos',
    component: AdmViewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'adiciona-produto',
    component: AdicinaProdutoComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmViewRoutingModule {}
