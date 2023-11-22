import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { LoginService } from 'src/app/services/login.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  usuarios?: Usuario[];
  loading = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.constroiFormulario();
  }

  ngOnInit(): void {
    this.usuariosService.listaUsuarios().subscribe((res) => {
      this.usuarios = res;
    });
  }

  constroiFormulario = () => {
    this.form = this.fb.group({
      email: [
        null,
        [Validators.required, Validators.email, Validators.maxLength(50)],
      ],
      senha: [null, [Validators.required, Validators.minLength(3)]],
    });
  };

  login = () => {
    this.loading = true;
    if (this.usuarios) {
      this.loginService.login(this.form.value, this.usuarios);
    }
    const usuarioLogado = this.loginService.usuarioLogado();
    this.loading = false;
    if (usuarioLogado) {
      this.router.navigate([
        `${usuarioLogado.tipo.toLowerCase()}/lista-produtos`,
      ]);
    } else {
      this.form.reset();
      alert('Email ou senha incorretos');
    }
  };
}
