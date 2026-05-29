const WA_NUMBER = '5562999999999'

export default function CtaFinal() {
  return (
    <section id="contato" className="py-28 px-6 bg-green-dark text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#c9a84c_1px,transparent_1px),linear-gradient(to_bottom,#c9a84c_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>
      <div className="max-w-2xl mx-auto relative z-10">
        <p className="text-gold border border-gold/30 bg-gold/10 inline-block px-4 py-1.5 rounded-full text-[11px] tracking-[0.2em] font-bold uppercase mb-6">Próximo passo</p>

        <h2 className="font-display text-white text-4xl lg:text-5xl font-semibold leading-tight mb-6">
          Pronto para construir com{' '}
          <em className="not-italic text-gold border-b-2 border-gold/50 pb-1">quem realmente se comunica</em>?
        </h2>

        <p className="text-white/80 font-medium text-[17px] leading-relaxed mb-10 max-w-xl mx-auto">
          Entre em contato agora e receba um orçamento detalhado, sem compromisso.
          Nossa equipe responde em até 2 horas úteis.
        </p>

        <a
          href={`https://wa.me/${WA_NUMBER}?text=Olá! Gostaria de solicitar um orçamento.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold text-base px-8 py-4 rounded-md hover:bg-[#20b558] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Falar agora no WhatsApp
        </a>

        <p className="text-white/60 font-medium text-[13px] mt-6 tracking-wide">
          Atendimento de segunda a sábado · Resposta rápida e sem enrolação
        </p>
      </div>
    </section>
  )
}
