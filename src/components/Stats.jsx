import { useRevealGroup } from '../hooks/useReveal'

const stats = [
  { num: '+150', label: 'Obras entregues' },
  { num: '12+',  label: 'Anos de experiência' },
  { num: '98%',  label: 'Clientes satisfeitos' },
  { num: '100%', label: 'Comunicação direta' },
]

export default function Stats() {
  const ref = useRevealGroup(0.2)

  return (
    <div className="bg-green-deep py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--gold)_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      <div
        ref={ref}
        className="reveal-group max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 px-6 relative z-10"
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className={`text-center px-4 ${
              i !== stats.length - 1 ? 'md:border-r border-gold/30' : ''
            } ${i % 2 === 0 ? 'border-r border-gold/30 md:border-r' : 'border-r-0'}`}
          >
            <div className="font-display text-[2.8rem] font-bold text-gold drop-shadow-sm mb-2">
              {s.num}
            </div>
            <div className="text-[13px] text-green-light tracking-wider font-semibold uppercase">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}