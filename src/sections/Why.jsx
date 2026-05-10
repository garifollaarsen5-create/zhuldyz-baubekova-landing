import Reveal from '../components/Reveal.jsx'

export default function Why() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-x grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <Reveal>
          <span className="eyebrow mb-4">Почему это актуально</span>
          <h2 className="section-title text-[clamp(1.8rem,3.2vw,2.6rem)]">
            Часто проблема не в бизнесе, а в том, <span className="grad-gold">как он подготовлен для банка</span>
          </h2>
          <div className="mt-5 space-y-4 text-navy-700 text-[1.04rem] leading-relaxed">
            <p>
              Многие предприниматели хотят развивать бизнес, но не знают, как правильно подойти к финансированию. Часто проблема не в том, что бизнес плохой, а в том, что он неправильно подготовлен для банка.
            </p>
            <p>
              Банк смотрит на цифры, обороты, налоги, кредитную историю, залоги, отчётность и прозрачность учёта. Наша задача — помочь предпринимателю увидеть свой бизнес <b>глазами банка</b> и подготовиться к финансированию грамотно.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: 'Обороты', v: 'структура и стабильность' },
              { k: 'Налоги', v: 'режим и нагрузка' },
              { k: 'Залоги', v: 'оценка и ликвидность' },
              { k: 'История', v: 'кредитная и налоговая' },
              { k: 'Отчётность', v: 'полнота и формат' },
              { k: 'Учёт', v: 'прозрачность и порядок' },
            ].map((c, i) => (
              <div key={i} className="card p-5 hover:-translate-y-1 hover:shadow-card transition-all">
                <div className="w-10 h-10 rounded-xl bg-gold-grad text-navy-900 grid place-items-center font-display font-bold text-sm mb-3">
                  {String(i+1).padStart(2,'0')}
                </div>
                <div className="font-display font-bold text-navy-900">{c.k}</div>
                <div className="text-sm text-navy-500 mt-1">{c.v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
