import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Header } from '../components/Layout/Header';
import { Footer } from '../components/Layout/Footer';

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <Header />

      {/* Hero Section - Modernizado */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        {/* Background decorativo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm border border-blue-200 dark:border-blue-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Novos cursos toda semana
          </div>

          {/* Título Principal */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            Prepare-se para as
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text animate-gradient">
              Carreiras do Futuro
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Desenvolva competências para profissões que ainda não existem. 
            Aprenda sobre <span className="font-semibold text-blue-600 dark:text-blue-400">IA</span>, 
            <span className="font-semibold text-green-600 dark:text-green-400"> sustentabilidade</span> e 
            <span className="font-semibold text-purple-600 dark:text-purple-400"> bem-estar</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => navigate('/cursos')}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explorar Cursos Gratuitos
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => navigate('/cadastro')}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-xl font-semibold hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Criar Conta Gratuita
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8 pt-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white dark:border-gray-900"></div>
                ))}
              </div>
              <span className="font-medium">+7.250 alunos</span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <span className="ml-2 font-medium">4.9/5.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Modernizado */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '6+', label: 'Cursos Disponíveis', icon: '📚', color: 'blue' },
            { number: '7.250+', label: 'Alunos Ativos', icon: '👥', color: 'purple' },
            { number: '3', label: 'Cursos Gratuitos', icon: '🎁', color: 'green' }
          ].map((stat, idx) => (
            <div key={idx} className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className={`text-5xl font-bold bg-gradient-to-r ${
                stat.color === 'blue' ? 'from-blue-600 to-cyan-600' :
                stat.color === 'purple' ? 'from-purple-600 to-pink-600' :
                'from-green-600 to-emerald-600'
              } text-transparent bg-clip-text mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section - Modernizado */}
      <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Por que escolher o SkillHub?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A plataforma completa para sua evolução profissional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '💡',
                title: 'Inovação Constante',
                desc: 'Cursos atualizados com as últimas tendências em IA, sustentabilidade e novas formas de trabalho',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: '🎯',
                title: 'Aprendizagem Flexível',
                desc: 'Estude no seu ritmo, de onde estiver. Conteúdo adaptado para ambientes híbridos e remotos',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: '🌟',
                title: 'Inclusão e Diversidade',
                desc: 'Conteúdo acessível e inclusivo, preparando profissionais diversos para o mercado',
                gradient: 'from-green-500 to-emerald-500'
              }
            ].map((feature, idx) => (
              <div key={idx} className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section - Modernizado */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Temas que Você Vai Explorar
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Prepare-se para as profissões do amanhã
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '🤖', titulo: 'IA como Parceira', desc: 'Trabalhe com IA de forma colaborativa', color: 'blue' },
            { icon: '🌱', titulo: 'Economia Verde', desc: 'Carreiras sustentáveis do futuro', color: 'green' },
            { icon: '🧘', titulo: 'Bem-Estar', desc: 'Saúde mental no trabalho híbrido', color: 'purple' },
            { icon: '🎯', titulo: 'Reskilling', desc: 'Requalificação profissional contínua', color: 'pink' },
            { icon: '🥽', titulo: 'Ambientes Imersivos', desc: 'VR/AR no ambiente de trabalho', color: 'indigo' },
            { icon: '🤝', titulo: 'Inclusão', desc: 'Diversidade e inclusão produtiva', color: 'orange' }
          ].map((tema, idx) => (
            <div key={idx} className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transform hover:-translate-y-1 cursor-pointer">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{tema.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {tema.titulo}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {tema.desc}
              </p>
              
              {/* Arrow indicator */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section - Modernizado */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-24">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comece Sua Jornada Hoje
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Acesse cursos gratuitos e prepare-se para as profissões do amanhã. 
            Junte-se a milhares de profissionais que já transformaram suas carreiras.
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => navigate('/cadastro')}
            className="group bg-white text-blue-600 hover:bg-gray-50 px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Criar Conta Gratuita
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Button>
          
          {/* Trust badges */}
          <div className="mt-12 flex items-center justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span>Sem Cartão</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span>Acesso Imediato</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
