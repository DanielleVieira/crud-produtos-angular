import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditaProdutoComponent } from './edita-produto.component';
import { AngularMaterialModule } from 'src/app/utils/angular-material-module/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditaProdutoComponent],
  exports: [EditaProdutoComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class EditaProdutoModule {}
