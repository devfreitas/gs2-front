/**
 * Tipos relacionados a cursos
 */

export interface Curso {
  id: string;
  titulo: string;
  descricao: string;
  descricaoCompleta: string;
  categoria: CategoriaCurso;
  nivel: NivelCurso;
  duracao: string; // Ex: "8 semanas", "40 horas"
  preco: number; // 0 para cursos gratuitos
  gratuito: boolean;
  imagemUrl: string;
  instrutor: string;
  avaliacoes: number;
  numeroAlunos: number;
  competencias: string[]; // Competências desenvolvidas
  futuroTrabalho: string[]; // Áreas do futuro do trabalho
}

export type CategoriaCurso = 
  | 'ia-tecnologia'
  | 'soft-skills'
  | 'sustentabilidade'
  | 'saude-bem-estar'
  | 'ambientes-hibridos'
  | 'inclusao-diversidade';

export type NivelCurso = 'iniciante' | 'intermediario' | 'avancado';

export interface FiltrosCurso {
  categoria?: CategoriaCurso;
  nivel?: NivelCurso;
  gratuito?: boolean;
  busca?: string;
}
