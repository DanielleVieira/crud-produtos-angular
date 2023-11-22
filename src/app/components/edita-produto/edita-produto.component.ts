import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-edita-produto',
  templateUrl: './edita-produto.component.html',
  styleUrls: ['./edita-produto.component.scss'],
})
export class EditaProdutoComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private produtosService: ProdutosService,
    private dialogRef: MatDialogRef<EditaProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Produto
  ) {
    this.constroiFormulario();
  }

  constroiFormulario = () => {
    this.form = this.fb.group({
      nome: [
        this.data.nome,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      preco: [this.data.preco, [Validators.required, , Validators.min(0)]],
      descricao: [
        this.data.descricao,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250),
        ],
      ],
      categoria: [
        this.data.categoria,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      imgUrl: [this.data.imgUrl, [Validators.required]],
    });
  };

  cancela = () => {
    this.dialogRef.close(false);
  };

  editaProduto = () => {
    this.dialogRef.close({ ...this.form.value, id: this.data.id });
  };
}
