import { useState, useEffect } from 'react';
import { Layout } from '../components/Layout/Layout';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import type { Curso, CategoriaCurso, NivelCurso } from '../types/curso';
import { cursoService } from '../services/cursoService';

/**
 * Página de Catálogo de Cursos
 */
export function Cursos() {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtroCategoria, setFiltroCategoria] = useState<CategoriaCurso | ''>('');
  const [filtroNivel, setFiltroNivel] = useState<NivelCurso | ''>('');
  const [filtroGratuito, setFiltroGratuito] = useState<boolean | undefined>(undefined);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    carregarCursos();
  }, [filtroCategoria, filtroNivel, filtroGratuito, busca]);

  const carregarCursos = async () => {
    setLoading(true);
    try {
      const resultado = await cursoService.buscarCursos({
        categoria: filtroCategoria || undefined,
        nivel: filtroNivel || undefined,
        gratuito: filtroGratuito,
        busca: busca || undefined
      });
      setCursos(resultado);
    } catch (error) {
      console.error('Erro ao carregar cursos:', error);
    } finally {
      setLoading(false);
    }
  };

  const limparFiltros = () => {
    setFiltroCategoria('');
    setFiltroNivel('');
    setFiltroGratuito(undefined);
    setBusca('');
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Catálogo de Cursos
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore cursos para o futuro do trabalho
          </p>
        </div>

        {/* Filtros */}
        <Card>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Filtros
            </h2>
            
            {/* Busca */}
            <div>
              <input
                type="text"
                placeholder="Buscar cursos..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Categoria */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Categoria
                </label>
                <select
                  value={filtroCategoria}
                  onChange={(e) => setFiltroCategoria(e.target.value as CategoriaCurso | '')}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">Todas</option>
                  <option value="ia-tecnologia">IA e Tecnologia</option>
                  <option value="soft-skills">Soft Skills</option>
                  <option value="sustentabilidade">Sustentabilidade</option>
                  <option value="saude-bem-estar">Saúde e Bem-Estar</option>
                  <option value="ambientes-hibridos">Ambientes Híbridos</option>
                  <option value="inclusao-diversidade">Inclusão e Diversidade</option>
                </select>
              </div>

              {/* Nível */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nível
                </label>
                <select
                  value={filtroNivel}
                  onChange={(e) => setFiltroNivel(e.target.value as NivelCurso | '')}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">Todos</option>
                  <option value="iniciante">Iniciante</option>
                  <option value="intermediario">Intermediário</option>
                  <option value="avancado">Avançado</option>
                </select>
              </div>

              {/* Preço */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Preço
                </label>
                <select
                  value={filtroGratuito === undefined ? '' : filtroGratuito ? 'gratuito' : 'pago'}
                  onChange={(e) => {
                    if (e.target.value === '') setFiltroGratuito(undefined);
                    else setFiltroGratuito(e.target.value === 'gratuito');
                  }}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">Todos</option>
                  <option value="gratuito">Gratuitos</option>
                  <option value="pago">Pagos</option>
                </select>
              </div>
            </div>

            <Button variant="secondary" onClick={limparFiltros} size="sm">
              Limpar Filtros
            </Button>
          </div>
        </Card>

        {/* Lista de Cursos */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300">Carregando cursos...</p>
          </div>
        ) : cursos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300">Nenhum curso encontrado</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cursos.map((curso) => (
              <Card key={curso.id} variant="elevated" className="hover:shadow-xl transition-shadow">
                <div className="space-y-4">
                  {/* Imagem */}
                  <div className="relative">
                    <img
                      src={curso.imagemUrl}
                      alt={curso.titulo}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    {curso.gratuito && (
                      <span className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Gratuito
                      </span>
                    )}
                  </div>

                  {/* Conteúdo */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {curso.titulo}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {curso.descricao}
                    </p>
                  </div>

                  {/* Informações */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>⭐ {curso.avaliacoes}</span>
                    <span>👥 {curso.numeroAlunos}</span>
                    <span>⏱️ {curso.duracao}</span>
                  </div>

                  {/* Competências */}
                  <div className="flex flex-wrap gap-2">
                    {curso.competencias.slice(0, 3).map((comp, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>

                  {/* Preço e Ação */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div>
                      {curso.gratuito ? (
                        <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                          Grátis
                        </span>
                      ) : (
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                          R$ {curso.preco}
                        </span>
                      )}
                    </div>
                    {curso.gratuito ? (
                      <Button variant="primary">
                        Acessar Grátis
                      </Button>
                    ) : (
                      <Button 
                        variant="primary"
                        onClick={() => window.location.href = `/checkout?curso=${curso.id}`}
                      >
                        Comprar Agora
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
