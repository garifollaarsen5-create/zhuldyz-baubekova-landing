import Reveal from '../components/Reveal.jsx'
import { IconBook, IconArrow, IconCheck } from '../components/Icons.jsx'

const PROGRAM = [
  'Как работает финансовый консалтинг',
  'Какие бывают бизнес-кредиты',
  'Как банки оценивают предпринимателей',
  'Какие документы нужны для заявки',
  'Как анализировать бизнес клиента',
  'Как подбирать программу финансирования',
  'Как сопровождать клиента до подачи заявки',
  'Как работать честно и на договорной основе',
]

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 text-white relative overflow-hidden"
             style={{ backgroundColor: '#081c3d', backgroundImage: 'linear-gradient(135deg, #143464 0%, #081c3d 100%)' }}>
      <div aria-hidden className="absolute inset-0 bg-dots opacity-10" />

      <div className="container-x relative grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
        <Reveal>
          <span className="eyebrow-gold mb-5"><IconBook width="14" height="14" /> Обучение для финансистов</span>
          <h2 className="font-display font-bold leading-[1.1] text-[clamp(1.8rem,3.4vw,2.8rem)]">
            Обучение специалистов по <span className="grad-gold">сопровождению бизнес-кредитов МСБ</span>
          </h2>
          <p className="mt-5 text-navy-100 text-lg leading-relaxed">
            Я обучаю финансистов, бухгалтеров и специалистов, которые хотят освоить направление сопровождения предпринимателей при получении бизнес-кредитов.
          </p>

          <div className="mt-7 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
            <div className="text-sm uppercase tracking-wider text-gold-400 font-bold">Результат обучения</div>
            <p className="mt-2 text-white/95">
              Участник понимает, как сопровождать предпринимателя в процессе получения бизнес-кредита, и может начать работать в этом направлении как специалист.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#contact" className="btn-gold">Записаться в лист ожидания <IconArrow /></a>
            <a href="https://wa.me/77754492929?text=Здравствуйте!%20Хочу%20узнать%20об%20обучении" target="_blank" rel="noopener"
               className="btn bg-white/10 text-white border-2 border-white/20 px-6 py-3.5 hover:bg-white/15 hover:-translate-y-0.5">
              Узнать об обучении
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="card !bg-white/[0.06] !border-white/15 p-6 lg:p-8">
            <h3 className="font-display font-bold text-xl text-white mb-5">Программа обучения</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {PROGRAM.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-navy-50">
                  <span className="w-7 h-7 shrink-0 rounded-lg bg-gold-grad text-navy-900 grid place-items-center mt-0.5">
                    <IconCheck width="14" height="14" />
                  </span>
                  <span className="text-[0.95rem] leading-snug">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
