import { Component, Input } from '@angular/core';
import { EMPTY, catchError, tap } from 'rxjs';
import { Produto } from 'src/app/models/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirProdutoComponent } from '../excluir-produto/excluir-produto.component';
import { LoginService } from 'src/app/services/login.service';
import { EditaProdutoComponent } from '../edita-produto/edita-produto.component';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss'],
})
export class ListaProdutosComponent {
  @Input() excluirHabilitado?: boolean;
  produtos: Produto[] = [];

  constructor(
    private produtosService: ProdutosService,
    private dialog: MatDialog,
    private loginService: LoginService
  ) {
    this.listaProdutos();
  }

  listaProdutos = () => {
    this.produtosService
      .listaProdutos()
      .pipe(
        tap((res) => {
          if (res) {
            this.produtos = res;
          }
        }),
        catchError((erro) => {
          //implementar
          return EMPTY;
        })
      )
      .subscribe();
  };

  abreDialogDeletaProduto = (produto: Produto) => {
    const dialogRef = this.dialog.open(ExcluirProdutoComponent, {
      disableClose: true,
      data: produto,
    });

    dialogRef.afterClosed().subscribe((deletar: boolean) => {
      if (deletar && this.loginService.usuarioLogado()?.tipo === 'ADM') {
        this.produtosService
          .deletaProduto(produto)
          .pipe(
            tap((res) => {
              this.listaProdutos();
            }),
            catchError((erro) => {
              //Implemntar
              return EMPTY;
            })
          )
          .subscribe();
      } else {
        //Implementar
      }
    });
  };

  abreDialogEditaProduto = (produto: Produto) => {
    const dialogRef = this.dialog.open(EditaProdutoComponent, {
      disableClose: true,
      data: produto,
    });

    dialogRef.afterClosed().subscribe((produto: Produto) => {
      if (produto) {
        debugger;
        this.produtosService
          .editaProduto(produto)
          .pipe(
            tap((res) => {
              this.listaProdutos();
            }),
            catchError((erro) => {
              //Implemntar
              return EMPTY;
            })
          )
          .subscribe();
      } else {
        //Implementar
      }
    });
  };
}
