import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicinaProdutoComponent } from './adicina-produto.component';

const routes: Routes = [
  {
    path: '',
    component: AdicinaProdutoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicinaProdutoRoutingModule {}
