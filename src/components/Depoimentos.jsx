const depoimentos = [
  {
    text: 'Desde o primeiro contato até a entrega, me senti parte do processo. Recebo fotos e atualizações todo dia pelo WhatsApp. Nunca imaginei que construir poderia ser assim.',
    name: 'Carlos Eduardo M.',
    role: 'Construção residencial · Goiânia/GO',
  },
  {
    text: 'O orçamento foi exatamente o que pagamos. Sem surpresas, sem valores extras. A equipe é profissional e o acabamento superou o que eu esperava.',
    name: 'Fernanda R.',
    role: 'Reforma comercial · Aparecida de Goiânia/GO',
  },
  {
    text: 'Tinha muito medo de obra por experiências ruins no passado. A MF mudou completamente a minha visão. Entregaram no prazo e com qualidade impecável.',
    name: 'Roberto A.',
    role: 'Ampliação residencial · Goiânia/GO',
  },
]

export default function Depoimentos() {
  return (
    <section id="projetos" className="py-24 px-6 bg-green-dark">
      <div className="max-w-5xl mx-auto">
        <p className="text-gold-light bg-gold/20 border border-gold/30 inline-block px-3 py-1 rounded-sm text-[11px] tracking-[0.2em] font-bold uppercase mb-4 shadow-sm">Depoimentos</p>
        <h2 className="font-display text-white text-3xl lg:text-4xl font-semibold leading-snug">
          O que nossos clientes dizem
        </h2>
        <div className="w-12 h-1 bg-gold mt-6 mb-4 rounded-full" />
        <p className="text-white/80 text-base max-w-md leading-relaxed font-medium">
          A opinião de quem já passou pela experiência de construir com a Medeiros Filgueira.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {depoimentos.map((d, i) => (
            <div
              key={i}
              className="bg-green-deep border border-gold/30 rounded-lg p-8 shadow-md hover:border-gold/60 transition-colors relative"
            >
              <div className="text-gold text-base tracking-widest mb-5">★★★★★</div>
              <p className="text-white/90 font-medium text-[15px] leading-relaxed italic mb-6">"{d.text}"</p>
              <div className="mt-auto">
                <p className="text-gold-light text-[15px] font-bold">{d.name}</p>
                <p className="text-white/60 text-[13px] mt-1.5 font-medium">{d.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
