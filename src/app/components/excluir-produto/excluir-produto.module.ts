import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcluirProdutoComponent } from './excluir-produto.component';
import { AngularMaterialModule } from 'src/app/utils/angular-material-module/angular-material.module';

@NgModule({
  declarations: [ExcluirProdutoComponent],

  imports: [CommonModule, AngularMaterialModule],
})
export class ExcluirProdutoModule {}
