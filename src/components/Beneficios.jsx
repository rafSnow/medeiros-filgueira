const benefits = [
  { title: 'Orçamento preciso e sem surpresas', desc: 'Levantamento detalhado antes de começar. O que foi combinado é o que você paga.' },
  { title: 'Atendimento via WhatsApp em tempo real', desc: 'Tire dúvidas, acompanhe fotos e receba atualizações diretamente no seu celular.' },
  { title: 'Materiais de qualidade comprovada', desc: 'Parceiros certificados e materiais selecionados para garantir durabilidade e acabamento.' },
  { title: 'Equipe própria e responsável', desc: 'Profissionais capacitados e supervisionados — sem terceirizações que comprometam a qualidade.' },
  { title: 'Documentação e garantia da obra', desc: 'Toda obra entregue com documentação completa e garantia formal sobre os serviços executados.' },
  { title: 'Cronograma monitorado', desc: 'Etapas claras, prazos definidos e responsáveis identificados em cada fase da construção.' },
]

export default function Beneficios() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Decorative background simple pattern */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none fade-in"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <p className="text-gold-light bg-gold/90 inline-block px-3 py-1 rounded-sm text-[11px] tracking-[0.2em] font-bold uppercase mb-4 shadow-sm">
          Por que escolher a MF
        </p>
        <h2 className="font-display text-green-deep text-3xl lg:text-4xl font-semibold leading-snug gold-line">
          Cada detalhe pensado para a sua tranquilidade
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-x-12 gap-y-8">
          {benefits.map((b, i) => (
            <div 
              key={i} 
              className="flex gap-5 items-start p-5 -mx-5 rounded-lg border border-transparent hover:bg-offwhite hover:border-gold/20 transition-all duration-300 group"
            >
              <span className="font-display text-[2.75rem] font-bold text-gold/30 leading-none shrink-0 w-12 group-hover:text-gold transition-colors duration-300">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="mt-0.5">
                <h3 className="font-bold text-green-deep text-[16px] mb-2">{b.title}</h3>
                <p className="text-gray-700 text-[14.5px] leading-relaxed font-medium">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
