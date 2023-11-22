import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './utils/angular-material-module/angular-material.module';
import { ProdutosService } from './services/produtos.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { ExcluirProdutoModule } from './components/excluir-produto/excluir-produto.module';
import { EditaProdutoComponent } from './components/edita-produto/edita-produto.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
  ],
  providers: [ProdutosService, LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
