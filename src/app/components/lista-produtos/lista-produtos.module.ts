import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProdutosComponent } from './lista-produtos.component';
import { AngularMaterialModule } from 'src/app/utils/angular-material-module/angular-material.module';
import { ExcluirProdutoModule } from '../excluir-produto/excluir-produto.module';
import { EditaProdutoModule } from '../edita-produto/edita-produto.module';

@NgModule({
  declarations: [ListaProdutosComponent],
  exports: [ListaProdutosComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ExcluirProdutoModule,
    EditaProdutoModule,
  ],
})
export class ListaProdutosModule {}
