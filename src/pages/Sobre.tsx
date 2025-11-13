import { Layout } from '../components/Layout/Layout';

export function Sobre() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre o SkillHub
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Transformando o futuro da educação profissional
          </p>
        </div>

        {/* Conteúdo */}
        <div className="space-y-8">
          {/* Missão */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Nossa Missão
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              O SkillHub é uma plataforma inovadora dedicada a conectar pessoas às melhores
              oportunidades de capacitação profissional. Acreditamos que a educação de qualidade
              deve ser acessível a todos, e trabalhamos para democratizar o acesso ao conhecimento
              através de cursos online de alta qualidade.
            </p>
          </section>

          {/* Visão */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Nossa Visão
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Ser a principal referência em educação profissional online, reconhecida pela
              excelência dos cursos oferecidos e pelo impacto positivo na carreira de milhares
              de profissionais em todo o Brasil.
            </p>
          </section>

          {/* Valores */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Nossos Valores
            </h2>
            <ul className="space-y-3">
              {[
                'Excelência em educação',
                'Acessibilidade e inclusão',
                'Inovação constante',
                'Compromisso com resultados',
                'Transparência e ética'
              ].map((valor, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">{valor}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Estatísticas */}
          <section className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Nossos Números
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Cursos Disponíveis</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10k+</div>
                <div className="text-blue-100">Alunos Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-blue-100">Satisfação</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
