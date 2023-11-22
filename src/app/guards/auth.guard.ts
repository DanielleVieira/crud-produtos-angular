import { Injectable } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private router: Router, private loginService: LoginService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise((resolve, reject) => {
      const usuarioLogado = this.loginService.usuarioLogado();
      if (
        usuarioLogado?.tipo === 'ADM' &&
        (state.url === '/adm/lista-produtos' ||
          state.url === '/adm/adiciona-produto')
      ) {
        resolve(true);
      } else if (
        usuarioLogado?.tipo === 'FUNC' &&
        state.url === '/func/lista-produtos'
      ) {
        resolve(true);
      } else if (usuarioLogado) {
        usuarioLogado?.tipo === 'ADM'
          ? this.router.navigate(['/adm/lista-produtos'])
          : this.router.navigate(['/func/lista-produtos']);
      } else {
        resolve(false);
        this.router.navigate(['/login']);
      }
    });
  }
}
