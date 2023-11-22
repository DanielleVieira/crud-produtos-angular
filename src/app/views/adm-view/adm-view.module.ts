import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmViewRoutingModule } from './adm-view-routing.module';
import { AdmViewComponent } from './adm-view.component';
import { AngularMaterialModule } from 'src/app/utils/angular-material-module/angular-material.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { ListaProdutosModule } from 'src/app/components/lista-produtos/lista-produtos.module';
import { AdicinaProdutoComponent } from 'src/app/components/adicina-produto/adicina-produto.component';
import { AdicinaProdutoModule } from 'src/app/components/adicina-produto/adicina-produto.module';

@NgModule({
  declarations: [AdmViewComponent],
  imports: [
    CommonModule,
    AdmViewRoutingModule,
    AngularMaterialModule,
    HeaderModule,
    ListaProdutosModule,
    AdicinaProdutoModule,
  ],
})
export class AdmViewModule {}
