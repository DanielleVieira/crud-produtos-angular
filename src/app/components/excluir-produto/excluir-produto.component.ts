import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Produto } from 'src/app/models/produto.model';

@Component({
  selector: 'app-excluir-produto',
  templateUrl: './excluir-produto.component.html',
  styleUrls: ['./excluir-produto.component.scss'],
})
export class ExcluirProdutoComponent {
  constructor(
    private dialogRef: MatDialogRef<ExcluirProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Produto
  ) {}

  cancela = () => {
    this.dialogRef.close(false);
  };

  deletaProduto = () => {
    this.dialogRef.close(true);
  };
}
