import { useState } from 'react';
import { Layout } from '../components/Layout/Layout';

interface FAQItem {
  pergunta: string;
  resposta: string;
}

const faqData: FAQItem[] = [
  {
    pergunta: 'Como faço para me cadastrar na plataforma?',
    resposta: 'Clique no botão "Cadastrar" no canto superior direito, preencha seus dados pessoais e crie uma senha segura. Você receberá um email de confirmação para ativar sua conta.'
  },
  {
    pergunta: 'Quais são as formas de pagamento aceitas?',
    resposta: 'Aceitamos pagamentos via cartão de crédito (Visa, Mastercard, Elo, American Express), PIX e boleto bancário. Todos os pagamentos são processados de forma segura.'
  },
  {
    pergunta: 'Posso cancelar minha inscrição em um curso?',
    resposta: 'Sim, você pode solicitar o cancelamento em até 7 dias após a compra e receber o reembolso integral, desde que não tenha assistido mais de 20% do conteúdo do curso.'
  },
  {
    pergunta: 'Os cursos têm certificado?',
    resposta: 'Sim! Todos os cursos oferecem certificado de conclusão digital. Após completar 100% do conteúdo e ser aprovado nas avaliações, você poderá baixar seu certificado.'
  },
  {
    pergunta: 'Por quanto tempo tenho acesso ao curso?',
    resposta: 'Você tem acesso vitalício ao curso adquirido. Pode assistir quantas vezes quiser, no seu próprio ritmo, sem prazo de validade.'
  },
  {
    pergunta: 'Posso assistir os cursos pelo celular?',
    resposta: 'Sim! Nossa plataforma é totalmente responsiva e funciona perfeitamente em smartphones, tablets e computadores. Você pode estudar de onde estiver.'
  },
  {
    pergunta: 'Como funciona o suporte aos alunos?',
    resposta: 'Oferecemos suporte via chat, email e fórum de dúvidas. Nossa equipe está disponível de segunda a sexta, das 9h às 18h. Dúvidas sobre o conteúdo podem ser postadas no fórum do curso.'
  },
  {
    pergunta: 'Preciso ter conhecimento prévio para fazer os cursos?',
    resposta: 'Depende do curso. Cada curso indica claramente os pré-requisitos necessários na página de descrição. Temos cursos para todos os níveis: iniciante, intermediário e avançado.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Perguntas Frequentes
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Encontre respostas para as dúvidas mais comuns
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-4">
                  {item.pergunta}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.resposta}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contato adicional */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Não encontrou sua resposta?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Entre em contato conosco e teremos prazer em ajudar!
          </p>
          <a
            href="/contato"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </Layout>
  );
}
