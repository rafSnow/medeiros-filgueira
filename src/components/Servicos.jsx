const services = [
  {
    title: 'Construção residencial',
    desc: 'Do alicerce ao acabamento, com gestão completa da obra e comunicação constante em cada fase do projeto.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: 'Obras comerciais',
    desc: 'Ambientes corporativos, lojas e galpões executados com rigor técnico e foco nos prazos do seu negócio.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
  },
  {
    title: 'Reformas e ampliações',
    desc: 'Transforme seu espaço sem dor de cabeça. Planejamento cuidadoso para minimizar impactos no seu dia a dia.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Projetos e consultoria',
    desc: 'Assessoria técnica desde o planejamento, com análise de viabilidade, projetos executivos e gestão integrada.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
]

export default function Servicos() {
  return (
    <section id="servicos" className="py-20 px-6 bg-offwhite">
      <div className="max-w-5xl mx-auto">
        <p className="text-gold-light bg-gold/90 inline-block px-3 py-1 rounded-sm text-[11px] tracking-[0.2em] font-bold uppercase mb-4 shadow-sm">Nossos serviços</p>
        <h2 className="font-display text-green-deep text-3xl lg:text-4xl font-semibold leading-snug gold-line">
          Soluções completas para cada fase da sua construção
        </h2>
        <p className="mt-5 text-gray-700 text-base max-w-xl leading-relaxed font-medium">
          Seja uma construção do zero, uma reforma ou um acabamento de alto padrão — temos
          a expertise e a estrutura para entregar o que você precisa.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white border border-gold/30 rounded-md p-7 relative group hover:shadow-lg hover:border-gold/60 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gold rounded-l-md" />
              <div className="w-11 h-11 bg-green-light shadow-sm rounded-md flex items-center justify-center mb-5 text-green-deep group-hover:bg-green-deep group-hover:text-gold-light transition-colors duration-300">
                {s.icon}
              </div>
              <h3 className="font-bold text-green-deep text-[15px] mb-2">{s.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
