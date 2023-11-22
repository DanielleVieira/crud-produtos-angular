import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from 'src/app/utils/angular-material-module/angular-material.module';
import { FuncViewComponent } from './func-view.component';
import { FuncViewRoutingModule } from './func-view-routing.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { ListaProdutosModule } from 'src/app/components/lista-produtos/lista-produtos.module';

@NgModule({
  declarations: [FuncViewComponent],
  imports: [
    CommonModule,
    FuncViewRoutingModule,
    AngularMaterialModule,
    HeaderModule,
    ListaProdutosModule,
  ],
})
export class FuncViewModule {}
