const WA = '5562999999999'

export default function Hero() {
  return (
    <section
      style={{ backgroundColor: 'var(--green)', position: 'relative', overflow: 'hidden' }}
      className="texture"
    >
      {/* Background geometric accent */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Corner decorative lines */}
      <div style={{
        position: 'absolute', top: 40, right: 60,
        width: 80, height: 80,
        borderTop: '1px solid rgba(201,168,76,0.2)',
        borderRight: '1px solid rgba(201,168,76,0.2)',
      }} />
      <div style={{
        position: 'absolute', bottom: 40, left: 60,
        width: 80, height: 80,
        borderBottom: '1px solid rgba(201,168,76,0.2)',
        borderLeft: '1px solid rgba(201,168,76,0.2)',
      }} />

      <div
        className="relative max-w-4xl mx-auto text-center"
        style={{ padding: '100px 24px 96px', zIndex: 1 }}
      >
        <p className="hero-anim-1" style={{
          color: 'var(--gold)', fontSize: 11, letterSpacing: '0.42em',
          textTransform: 'uppercase', marginBottom: 24, fontWeight: 300,
        }}>
          Construtora Medeiros Filgueira — Goiânia / GO
        </p>

        <h1 className="hero-anim-2" style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(36px, 5vw, 58px)',
          fontWeight: 300,
          color: '#fff',
          lineHeight: 1.18,
          marginBottom: 28,
          maxWidth: 760,
          margin: '0 auto 28px',
        }}>
          Do projeto à entrega,{' '}
          <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>
            você acompanha cada etapa
          </span>{' '}
          com total clareza
        </h1>

        <p className="hero-anim-3" style={{
          color: 'rgba(255,255,255,0.58)',
          fontSize: 17,
          lineHeight: 1.75,
          maxWidth: 520,
          margin: '0 auto 48px',
        }}>
          Construção e reforma com comunicação transparente, prazos cumpridos
          e acabamento de alto padrão. Porque você merece saber o que acontece
          na sua obra.
        </p>

        <div className="hero-anim-4 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`https://wa.me/${WA}?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20gratuito.`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              backgroundColor: 'var(--gold)',
              color: 'var(--green-dark)',
              fontWeight: 500, fontSize: 14,
              padding: '15px 30px',
              borderRadius: 3,
              textDecoration: 'none',
              transition: 'opacity 0.2s, transform 0.2s',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <WaIcon />
            Solicitar orçamento gratuito
          </a>

          <a
            href="#servicos"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              backgroundColor: 'transparent',
              color: 'rgba(255,255,255,0.78)',
              border: '1.5px solid rgba(255,255,255,0.22)',
              fontWeight: 400, fontSize: 14,
              padding: '15px 30px',
              borderRadius: 3,
              textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; e.currentTarget.style.color = 'rgba(255,255,255,0.78)'; }}
          >
            Conhecer nossos serviços
            <span style={{ fontSize: 18 }}>↓</span>
          </a>
        </div>

        {/* Divider */}
        <div style={{ width: 1, height: 60, background: 'linear-gradient(to bottom, rgba(201,168,76,0.4), transparent)', margin: '64px auto 0' }} />
      </div>
    </section>
  )
}

function WaIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}