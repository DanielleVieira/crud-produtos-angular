export interface Usuario {
  nome: string;
  email: string;
  senha: string;
  tipo: 'ADM' | 'FUNC';
  id: string | number;
}
