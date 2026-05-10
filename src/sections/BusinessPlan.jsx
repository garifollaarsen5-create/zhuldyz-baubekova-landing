import Reveal from '../components/Reveal.jsx'
import { IconArrow, IconCheck, IconWA } from '../components/Icons.jsx'

const FEATURES = [
  'Под требования банков',
  'С финансовыми расчётами',
  'Для кредита, инвестиций или лизинга',
  'С учётом вашей сферы бизнеса',
]

export default function BusinessPlan() {
  return (
    <section id="business-plan" className="py-20 lg:py-28 relative overflow-hidden text-white"
             style={{ backgroundColor: '#081c3d', backgroundImage: 'linear-gradient(135deg, #143464 0%, #081c3d 100%)' }}>
      <div aria-hidden className="absolute inset-0 bg-dots opacity-10" />

      <div className="container-x relative grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
        <Reveal>
          <span className="eyebrow-gold mb-5">Бизнес-план</span>
          <h2 className="font-display font-bold leading-[1.1] text-[clamp(1.85rem,3.4vw,2.8rem)] break-words">
            Нужен бизнес-план <span className="grad-gold">для банка?</span>
          </h2>
          <p className="mt-4 text-navy-100 text-lg flex items-center gap-2">
            Подготовим <b className="text-white">за 2 часа</b> <span aria-hidden>⏱️</span>
          </p>

          <ul className="mt-7 grid sm:grid-cols-2 gap-3">
            {FEATURES.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-7 h-7 shrink-0 rounded-lg bg-gold-grad text-navy-900 grid place-items-center mt-0.5">
                  <IconCheck width="14" height="14" />
                </span>
                <span className="text-[0.98rem] text-navy-50 leading-snug">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-gold">
              Заказать бизнес-план <IconArrow />
            </a>
            <a href="https://wa.me/77754492929?text=Здравствуйте!%20Нужен%20бизнес-план%20для%20банка."
               target="_blank" rel="noopener"
               className="btn bg-white/10 text-white border-2 border-white/20 px-6 py-3.5 hover:bg-white/15 hover:-translate-y-0.5">
              <IconWA width="18" height="18" /> Написать в WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-3xl p-7 lg:p-9 border bg-white text-navy-900 shadow-glow"
               style={{ borderColor: 'rgba(232,196,116,0.4)' }}>
            <div className="text-xs uppercase tracking-[0.18em] font-bold text-navy-500 mb-3">Стоимость</div>
            <div className="flex items-end gap-3">
              <span className="font-display font-bold leading-none grad-text text-[clamp(2.6rem,7vw,3.6rem)]">
                50 000
              </span>
              <span className="font-display font-bold text-2xl text-navy-700 mb-2">₸</span>
            </div>
            <div className="mt-2 text-navy-500">за бизнес-план под ключ</div>

            <div className="mt-6 pt-6 border-t border-navy-100 grid gap-3">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-gold-grad text-navy-900 grid place-items-center font-display font-bold text-sm">2ч</span>
                <span className="text-navy-700 text-sm"><b className="text-navy-900">Срок подготовки</b> — 2 часа</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-navy-50 text-navy-700 grid place-items-center font-display font-bold text-sm">₸</span>
                <span className="text-navy-700 text-sm"><b className="text-navy-900">Для кредита</b>, инвестиций или лизинга</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-navy-50 text-navy-700 grid place-items-center font-display font-bold text-sm">✓</span>
                <span className="text-navy-700 text-sm"><b className="text-navy-900">Соответствует</b> требованиям банков</span>
              </div>
            </div>

            <a href="#contact" className="btn-primary w-full mt-6 !py-3.5">
              Оставить заявку <IconArrow />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
