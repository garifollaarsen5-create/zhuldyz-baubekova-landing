import Reveal from '../components/Reveal.jsx'
import { IconCheck } from '../components/Icons.jsx'

const ITEMS = [
  'Получить кредит на развитие бизнеса',
  'Купить оборудование',
  'Пополнить оборотные средства',
  'Расширить бизнес',
  'Подготовиться к инвестору',
  'Навести порядок в учёте перед банком',
  'Понять, почему банк может отказать',
  'Выбрать программу через банки, «Даму» или другие инструменты',
]

export default function ForWhom() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-navy-50/40 to-white" />
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow mb-4">Кому подходит</span>
          <h2 className="section-title text-[clamp(1.8rem,3.2vw,2.6rem)]">
            Если перед вашим бизнесом стоит <span className="grad-gold">одна из этих задач</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ITEMS.map((t, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="card h-full p-5 flex items-start gap-3 hover:-translate-y-1 hover:shadow-card hover:border-navy-200 transition-all">
                <span className="w-9 h-9 shrink-0 rounded-xl bg-gold-grad text-navy-900 grid place-items-center">
                  <IconCheck width="18" height="18" />
                </span>
                <span className="text-navy-800 font-medium leading-snug">{t}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="mt-10 text-center">
          <a href="#contact" className="btn-primary">Оставить заявку на разбор бизнеса</a>
        </Reveal>
      </div>
    </section>
  )
}
