import { Injectable } from '@angular/core';
import { UsuarioLogin } from '../models/usuario-login.model';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { EMPTY, Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  usuarioLogado = (): Usuario => {
    return JSON.parse(localStorage.getItem('USUARIO') || 'null');
  };

  login = (usuarioLogin: UsuarioLogin, usuarios: Usuario[]) => {
    const usuario = usuarios.find((usuario) => {
      return (
        usuarioLogin.email === usuario.email &&
        usuarioLogin.senha === usuario.senha
      );
    });
    if (usuario) {
      localStorage.setItem('USUARIO', JSON.stringify(usuario));
    }
  };

  logout = () => {
    localStorage.setItem('USUARIO', 'null');
  };
}
