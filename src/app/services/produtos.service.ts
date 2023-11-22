import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';
import { EMPTY, Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private baseURL = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) {}

  adicionaProduto = (produto: Produto): Observable<any> => {
    return this.http.post(this.baseURL, produto);
  };

  deletaProduto = (produto: Produto): Observable<any> => {
    return this.http.delete(`${this.baseURL}/${produto.id}`);
  };

  editaProduto = (produto: Produto): Observable<any> => {
    return this.http.put(`${this.baseURL}/${produto.id}`, produto);
  };

  listaProdutos = (): Observable<any> => {
    return this.http.get(this.baseURL);
  };
}
