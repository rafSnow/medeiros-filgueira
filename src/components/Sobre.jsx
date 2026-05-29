import { useReveal, useRevealGroup } from '../hooks/useReveal'

const checks = [
  { title: 'Equipe qualificada', desc: 'Engenheiros, arquitetos e mestres de obras com histórico comprovado em projetos residenciais e comerciais.' },
  { title: 'Comunicação direta', desc: 'Relatórios de andamento, acesso pelo WhatsApp e um responsável dedicado ao seu projeto.' },
  { title: 'Prazos respeitados', desc: 'Cronograma detalhado com acompanhamento real — porque o seu tempo também é um investimento.' },
  { title: 'Transparência total', desc: 'Orçamentos claros, sem letras miúdas. Você sabe exatamente para onde vai cada real investido.' },
]

export default function Sobre() {
  const titleRef = useReveal()
  const gridRef = useRevealGroup(0.1)

  return (
    <section id="sobre" className="bg-white py-24 px-6 border-b border-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="reveal">
          <p className="text-gold-light bg-gold/90 inline-block px-3 py-1 rounded-sm text-[11px] tracking-[0.2em] font-bold uppercase mb-4 shadow-sm">
            Quem somos
          </p>
          <h2 className="font-display text-green-deep text-[clamp(28px,4vw,42px)] font-semibold max-w-140 leading-tight">
            Uma construtora que trata sua obra como se fosse a nossa
          </h2>
          <div className="w-12 h-1 bg-gold mt-6 mb-8 rounded-full" />
        </div>

        {/* Grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, marginTop: 40, alignItems: 'start' }}
          className="sobre-grid"
        >
          {/* Left text */}
          <div ref={useReveal()} className="reveal reveal-delay-1">
            <p className="text-[15px] text-gray-700 font-medium leading-[1.85] mb-4.5">
              A Medeiros Filgueira Construtora nasceu da convicção de que construir vai além de
              levantar paredes — é sobre confiar em quem está à frente do seu investimento.
            </p>
            <p className="text-[15px] text-gray-700 font-medium leading-[1.85] mb-4.5">
              Reunimos uma equipe de profissionais experientes, processos bem definidos e uma
              cultura de transparência que se reflete em cada projeto: do primeiro contato até
              a entrega das chaves.
            </p>
            <p className="text-[15px] text-gray-700 font-bold leading-[1.85]">
              Aqui, você não fica no escuro. Você acompanha, questiona e decide com segurança.
            </p>
          </div>

          {/* Right checks */}
          <div ref={gridRef} className="reveal-group flex flex-col gap-6">
            {checks.map((c) => (
              <div key={c.title} className="flex gap-4 items-start bg-offwhite p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="w-7 h-7 rounded-full bg-green-deep shrink-0 flex items-center justify-center mt-0.5 shadow-sm">
                  <svg width="12" height="10" viewBox="0 0 11 9" fill="none">
                    <path d="M1 4.5L4 7.5L10 1" stroke="#f5e9c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-green-deep text-[15px] mb-1">{c.title}</p>
                  <p className="text-[14px] text-gray-700 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .sobre-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}