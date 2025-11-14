import { Layout } from '../components/Layout/Layout';

interface Integrante {
  nome: string;
  rm: string;
  turma: string;
  foto: string;
  github: string;
  linkedin: string;
}

const integrantes: Integrante[] = [
  {
    nome: 'Nome do Integrante 1',
    rm: 'RM12345',
    turma: '1TDSPX',
    foto: '/public/joao.jpg',
    github: 'https://github.com/Veronesi30',
    linkedin: 'www.linkedin.com/in/jo%C3%A3o-victor-veronesi-734897276/'
  },
  {
    nome: 'Rafael de Freitas Moraes',
    rm: 'RM563210',
    turma: '1TDSPI',
    foto: '/public/rafael.jpg',
    github: 'https://github.com/devfreitas',
    linkedin: 'https://www.linkedin.com/in/rafael-freitas-9345492b5/'
  },
  {
    nome: 'Leonardo Herrera Sabbatini',
    rm: 'RM12347',
    turma: '1TDSPI',
    foto: '/public/leonardo.jpg',
    github: 'https://github.com/LeoSabbatini',
    linkedin: 'https://www.linkedin.com/in/devsabbatini/'
  }
];

export function Integrantes() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nossa Equipe
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Conheça os integrantes do projeto SkillHub
          </p>
        </div>

        {/* Grid de Integrantes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrantes.map((integrante) => (
            <div
              key={integrante.rm}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Foto */}
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <img
                  src={integrante.foto}
                  alt={integrante.nome}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Informações */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {integrante.nome}
                </h3>
                
                <div className="space-y-1 mb-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-semibold">RM:</span> {integrante.rm}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-semibold">Turma:</span> {integrante.turma}
                  </p>
                </div>

                {/* Links Sociais */}
                <div className="flex gap-3">
                  <a
                    href={integrante.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  
                  <a
                    href={integrante.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
