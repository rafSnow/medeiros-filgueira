import { useState } from 'react'

const faqs = [
  {
    q: 'Como funciona o acompanhamento da obra?',
    a: 'Você recebe atualizações periódicas diretamente no WhatsApp — fotos, relatórios de progresso e acesso direto ao responsável pela sua obra. Sem intermediários, sem falta de resposta.',
  },
  {
    q: 'Como é feito o orçamento?',
    a: 'Fazemos um levantamento técnico detalhado antes de qualquer proposta. Nosso orçamento é claro, descritivo e sem itens ocultos — você sabe exatamente o que está contratando.',
  },
  {
    q: 'Vocês atendem qual região?',
    a: 'Atuamos em Goiânia e região metropolitana. Para projetos fora dessa área, entre em contato e avaliamos a viabilidade conforme o escopo da obra.',
  },
  {
    q: 'E se houver atraso na obra?',
    a: 'Trabalhamos com cronograma formal e comunicamos qualquer imprevisto com antecedência. Em casos de imprevistos alheios à gestão, registramos formalmente e ajustamos o planejamento de forma transparente.',
  },
  {
    q: 'A obra tem garantia?',
    a: 'Sim. Todas as nossas obras são entregues com garantia formal sobre os serviços executados, além da documentação técnica completa para sua segurança.',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm hover:border-gold/50 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-bold text-green-deep text-[15px] group-hover:text-green-mid transition-colors">
          {q}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-5 h-5 text-gold shrink-0 ml-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-5 text-[14.5px] font-medium text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
          {a}
        </div>
      )}
    </div>
  )
}

export default function Faq() {
  return (
    <section className="py-24 px-6 bg-offwhite">
      <div className="max-w-3xl mx-auto">
        <div className="text-center md:text-left">
          <p className="text-gold-light bg-gold/90 inline-block px-3 py-1 rounded-sm text-[11px] tracking-[0.2em] font-bold uppercase mb-4 shadow-sm">Dúvidas frequentes</p>
          <h2 className="font-display text-green-deep text-3xl lg:text-4xl font-semibold leading-snug gold-line">
            Respondemos antes de você precisar perguntar
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem key={i} {...faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
