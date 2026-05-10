import Reveal from '../components/Reveal.jsx'

const STEPS = [
  { t: 'Первичная консультация', d: 'Понимаем запрос, сумму, цель финансирования и текущее состояние бизнеса.' },
  { t: 'Диагностика бизнеса',    d: 'Анализируем обороты, налоговый режим, отчётность, кредитную историю, залоги и документы.' },
  { t: 'Подбор решения',         d: 'Определяем подходящий банк, программу, кредитный продукт или инструмент господдержки.' },
  { t: 'Подготовка документов',  d: 'Собираем и упаковываем документы так, чтобы бизнес был понятен банку или инвестору.' },
  { t: 'Сопровождение заявки',   d: 'Коммуницируем с банком, отвечаем на вопросы, дорабатываем пакет, ведём до результата.' },
  { t: 'Контроль после выдачи',  d: 'Помогаем понимать требования по целевому использованию и финансовому сопровождению.' },
]

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-navy-50/40 relative overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow mb-4">Как проходит работа</span>
          <h2 className="section-title text-[clamp(1.8rem,3.2vw,2.6rem)]">
            Чёткий <span className="grad-gold">пошаговый процесс</span>
          </h2>
          <p className="mt-4 text-navy-600">
            Прозрачный путь от первой консультации до получения финансирования и контроля после выдачи.
          </p>
        </Reveal>

        <div className="relative">
          {/* Vertical line for md+ */}
          <div aria-hidden className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-navy-200 via-gold-400/50 to-navy-200" />

          <ol className="grid gap-5 md:gap-10">
            {STEPS.map((s, i) => {
              const left = i % 2 === 0
              return (
                <Reveal key={i} delay={i * 70}>
                  <li className={`relative md:grid md:grid-cols-2 md:gap-10 items-center`}>
                    {/* Marker */}
                    <span aria-hidden className="hidden md:grid absolute left-1/2 -translate-x-1/2 w-12 h-12 place-items-center rounded-full bg-gold-grad text-navy-900 font-display font-bold shadow-card border-4 border-white">
                      {i + 1}
                    </span>

                    <div className={`${left ? 'md:pr-16 md:text-right' : 'md:order-2 md:pl-16'}`}>
                      <div className="card p-6 md:p-7 hover:-translate-y-1 hover:shadow-card transition-all">
                        <div className={`flex items-center gap-3 ${left ? 'md:justify-end' : ''}`}>
                          <span className="md:hidden w-9 h-9 grid place-items-center rounded-full bg-gold-grad text-navy-900 font-display font-bold text-sm">{i + 1}</span>
                          <h3 className="font-display font-bold text-lg text-navy-900">{s.t}</h3>
                        </div>
                        <p className="mt-2 text-navy-600 leading-relaxed">{s.d}</p>
                      </div>
                    </div>
                    <div className={`${left ? 'md:order-2' : ''}`} aria-hidden />
                  </li>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
