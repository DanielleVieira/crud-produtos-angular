import { Component } from '@angular/core';
import { ProdutosService } from './services/produtos.service';
import { EMPTY, catchError, tap } from 'rxjs';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'crud-produtos-angular';
  constructor(private loginService: LoginService, private router: Router) {
    // const usuarioLogado = this.loginService.usuarioLogado();
    // if (usuarioLogado) {
    //   this.router.navigate([
    //     `${usuarioLogado.tipo.toLowerCase()}/lista-produtos`,
    //   ]);
    // }
  }
}
