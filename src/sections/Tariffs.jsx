import Reveal from '../components/Reveal.jsx'
import { IconArrow } from '../components/Icons.jsx'

const TARIFFS = [
  { range: 'до 50 000 000 ₸',          rate: 'до 2%',   highlight: false },
  { range: 'до 500 000 000 ₸',         rate: 'до 1%',   highlight: true  },
  { range: 'до 5 000 000 000 ₸',       rate: 'до 0,5%', highlight: false },
  { range: 'свыше 5 000 000 000 ₸',    rate: 'до 0,3%', highlight: false },
]

export default function Tariffs() {
  return (
    <section id="tariffs" className="py-20 lg:py-28 bg-white relative">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto mb-10">
          <span className="eyebrow mb-4">Стоимость</span>
          <h2 className="section-title text-[clamp(1.8rem,3.2vw,2.6rem)]">
            Тарифы за <span className="grad-gold">сопровождение проектов</span>
          </h2>
          <p className="mt-4 text-navy-600">
            Прозрачная фиксированная ставка от суммы привлечённого финансирования.
            Минимальная стоимость сопровождения — <b>500 000 ₸</b>.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {TARIFFS.map((t, i) => (
            <Reveal key={i} delay={i * 70}>
              <article
                className={`relative h-full rounded-3xl p-6 lg:p-7 border transition-all duration-300
                  ${t.highlight
                    ? 'border-transparent text-white shadow-glow'
                    : 'bg-white border-navy-100 shadow-soft hover:-translate-y-1 hover:shadow-card hover:border-navy-200'}`}
                style={t.highlight
                  ? { backgroundColor: '#081c3d', backgroundImage: 'linear-gradient(135deg, #143464 0%, #081c3d 100%)' }
                  : undefined}
              >
                <div className={`text-xs uppercase tracking-[0.18em] font-bold mb-3
                  ${t.highlight ? 'text-gold-400' : 'text-navy-500'}`}>
                  По проектам
                </div>
                <div className={`font-display font-bold leading-tight text-[1.05rem] sm:text-base
                  ${t.highlight ? 'text-white' : 'text-navy-900'}`}>
                  {t.range}
                </div>
                <div className="mt-5 pt-5 border-t flex items-end gap-2"
                     style={{ borderTopColor: t.highlight ? 'rgba(255,255,255,0.18)' : '#e3ebf7' }}>
                  <span className={`font-display font-bold leading-none text-[clamp(2rem,5vw,2.6rem)]
                    ${t.highlight ? 'grad-gold' : 'grad-text'}`}>
                    {t.rate}
                  </span>
                </div>
                <div className={`mt-2 text-sm ${t.highlight ? 'text-navy-100' : 'text-navy-500'}`}>
                  от суммы финансирования
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-navy-100 bg-navy-50/50 p-5 lg:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-gold-grad text-navy-900 grid place-items-center font-display font-bold text-sm shrink-0">₸</span>
            <div>
              <div className="font-bold text-navy-900">Минимальная стоимость — 500 000 ₸</div>
              <div className="text-sm text-navy-500">Оплата по факту получения финансирования клиентом</div>
            </div>
          </div>
          <a href="#contact" className="btn-gold !px-5 !py-3 text-sm sm:text-base shrink-0">
            Обсудить проект <IconArrow />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
