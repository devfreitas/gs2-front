import { Layout } from '../components/Layout/Layout';

export function Sobre() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-4">
            Sobre o SkillHub
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-slate-300 font-medium">
            Transformando o futuro da educação profissional
          </p>
        </div>

        {/* Conteúdo */}
        <div className="space-y-8">
          {/* Missão */}
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4">
              Nossa Missão
            </h2>
            <p className="text-gray-700 dark:text-slate-300 leading-relaxed font-medium">
              O SkillHub é uma plataforma inovadora dedicada a conectar pessoas às melhores
              oportunidades de capacitação profissional. Acreditamos que a educação de qualidade
              deve ser acessível a todos, e trabalhamos para democratizar o acesso ao conhecimento
              através de cursos online de alta qualidade.
            </p>
          </section>

          {/* Visão */}
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4">
              Nossa Visão
            </h2>
            <p className="text-gray-700 dark:text-slate-300 leading-relaxed font-medium">
              Ser a principal referência em educação profissional online, reconhecida pela
              excelência dos cursos oferecidos e pelo impacto positivo na carreira de milhares
              de profissionais em todo o Brasil.
            </p>
          </section>

          {/* Valores */}
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4">
              Nossos Valores
            </h2>
            <ul className="space-y-4">
              {[
                'Excelência em educação',
                'Acessibilidade e inclusão',
                'Inovação constante',
                'Compromisso com resultados',
                'Transparência e ética'
              ].map((valor, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"
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
                  <span className="text-gray-700 dark:text-slate-300 font-medium">{valor}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Estatísticas */}
          <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-700 dark:via-purple-700 dark:to-pink-700 rounded-xl shadow-xl p-10 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Nossos Números
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-3">500+</div>
                <div className="text-blue-100 dark:text-blue-200 font-semibold text-lg">Cursos Disponíveis</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-3">10k+</div>
                <div className="text-blue-100 dark:text-blue-200 font-semibold text-lg">Alunos Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-3">95%</div>
                <div className="text-blue-100 dark:text-blue-200 font-semibold text-lg">Satisfação</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
