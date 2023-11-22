import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-adicina-produto',
  templateUrl: './adicina-produto.component.html',
  styleUrls: ['./adicina-produto.component.scss'],
})
export class AdicinaProdutoComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private produtosService: ProdutosService,
    private router: Router
  ) {
    this.constroiFormulario();
  }

  constroiFormulario = () => {
    this.form = this.fb.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      preco: ['', [Validators.required, , Validators.min(0)]],
      descricao: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250),
        ],
      ],
      categoria: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      imgUrl: ['', [Validators.required]],
    });
  };

  salvar = () => {
    this.produtosService.adicionaProduto(this.form.value).subscribe((res) => {
      this.router.navigate(['/adm/lista-produtos']);
    });
  };
}
