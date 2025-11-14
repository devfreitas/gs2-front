export interface User {
  id: string;
  nome: string;
  email: string;
  cpf: string;
}

export interface Course {
  id: string;
  titulo: string;
  descricao: string;
  preco: number;
  instrutor: string;
  duracao: string;
  nivel: 'Iniciante' | 'Intermediário' | 'Avançado';
}

export interface CartItem {
  courseId: string;
  quantity: number;
}
