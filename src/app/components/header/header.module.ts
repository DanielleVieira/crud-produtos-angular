import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AngularMaterialModule } from 'src/app/utils/angular-material-module/angular-material.module';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, AngularMaterialModule],
})
export class HeaderModule {}
