import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdicinaProdutoRoutingModule } from './adicina-produto-routing.module';
import { AdicinaProdutoComponent } from './adicina-produto.component';
import { AngularMaterialModule } from 'src/app/utils/angular-material-module/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [AdicinaProdutoComponent],
  exports: [AdicinaProdutoComponent],
  imports: [
    CommonModule,
    AdicinaProdutoRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HeaderModule,
  ],
})
export class AdicinaProdutoModule {}
