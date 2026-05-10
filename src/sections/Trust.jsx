import Reveal from '../components/Reveal.jsx'
import { IconArrow, IconShield, IconUsers, IconBank } from '../components/Icons.jsx'

const STATS = [
  { num: '17', unit: 'лет',  label: 'опыта в банковской сфере',     accent: false },
  { num: '5+', unit: 'млрд ₸', label: 'привлечено финансирования', accent: true },
  { num: '500+', unit: '',   label: 'предпринимателей сопровождено', accent: false },
]

export default function Trust() {
  return (
    <section id="trust" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow mb-4">Почему мне доверяют</span>
          <h2 className="section-title text-[clamp(1.8rem,3.2vw,2.6rem)]">
            Цифры, опыт и <span className="grad-gold">аккредитации</span>
          </h2>
          <p className="mt-4 text-navy-600">
            Не просто красивые слова — за каждой цифрой стоит реальный результат и доверие институтов поддержки бизнеса.
          </p>
        </Reveal>

        {/* Big stats */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className={`relative rounded-3xl p-7 lg:p-8 border h-full
                ${s.accent
                  ? 'border-transparent text-white shadow-glow'
                  : 'bg-white border-navy-100 shadow-soft'}`}
                style={s.accent ? { backgroundColor: '#081c3d', backgroundImage: 'linear-gradient(135deg, #143464 0%, #081c3d 100%)' } : undefined}>
                <div className="relative">
                  <div className={`font-display font-bold leading-none flex items-end gap-2
                    ${s.accent ? 'text-white' : 'grad-text'}`}>
                    <span className="text-[clamp(3rem,6vw,4.5rem)]">{s.num}</span>
                    {s.unit && <span className={`text-xl mb-2 ${s.accent ? 'text-gold-400' : 'text-navy-500'}`}>{s.unit}</span>}
                  </div>
                  <p className={`mt-3 text-base ${s.accent ? 'text-navy-100' : 'text-navy-700'}`}>{s.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Accreditation bar */}
        <Reveal delay={200} className="mt-10">
          <div className="card overflow-hidden">
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-0">
              <div className="p-5 sm:p-7 lg:p-9 bg-navy-50/40 border-b lg:border-b-0 lg:border-r border-navy-100">
                <span className="eyebrow-gold mb-3"><IconShield width="14" height="14" /> Подтверждение доверия</span>
                <h3 className="font-display text-[1.25rem] sm:text-2xl font-bold text-navy-900 leading-snug break-words hyphens-auto">
                  Business Qoldau аккредитована Фондом «Даму» и ЕБРР
                </h3>
                <p className="mt-3 text-navy-600 text-[0.95rem] sm:text-base">
                  Это означает, что компания прошла отбор и соответствует требованиям институтов поддержки бизнеса в Казахстане и Европе.
                </p>
                <a href="https://damu.kz/ru/consulting_companies/" target="_blank" rel="noopener"
                   className="btn-primary mt-5 !px-5 !py-3 text-sm sm:text-base w-full sm:w-auto">
                  <span>Проверить в реестре Даму</span>
                  <IconArrow />
                </a>
              </div>

              <div className="p-7 lg:p-9 grid sm:grid-cols-2 gap-4 items-center">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-navy-100">
                  <span className="w-16 h-16 rounded-xl bg-white grid place-items-center shrink-0">
                    <img src="/logo-damu.png" alt="Фонд Даму" className="w-full h-full object-contain" />
                  </span>
                  <div>
                    <div className="font-bold text-navy-900">Фонд «Даму»</div>
                    <div className="text-xs text-navy-500">Государственный фонд развития МСБ</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-navy-100">
                  <span className="w-16 h-16 rounded-xl bg-white grid place-items-center shrink-0">
                    <img src="/logo-ebrd.png" alt="ЕБРР" className="w-full h-full object-contain" />
                  </span>
                  <div>
                    <div className="font-bold text-navy-900">ЕБРР</div>
                    <div className="text-xs text-navy-500">Европейский банк реконструкции и развития</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Trust pillars */}
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          <Reveal>
            <div className="card p-6 h-full hover:-translate-y-1 hover:shadow-card transition-all">
              <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-700 grid place-items-center mb-4"><IconBank width="24" height="24" /></div>
              <h4 className="font-display font-bold text-lg text-navy-900 mb-2">Банковский взгляд</h4>
              <p className="text-navy-600 text-sm leading-relaxed">Понимаем, как банк оценивает платежеспособность, залоги, обороты и налоговую нагрузку.</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="card p-6 h-full hover:-translate-y-1 hover:shadow-card transition-all">
              <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-700 grid place-items-center mb-4"><IconUsers width="24" height="24" /></div>
              <h4 className="font-display font-bold text-lg text-navy-900 mb-2">Команда экспертов</h4>
              <p className="text-navy-600 text-sm leading-relaxed">За каждым клиентом — финансисты и бухгалтеры с практическим опытом, а не один человек.</p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="card p-6 h-full hover:-translate-y-1 hover:shadow-card transition-all">
              <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-700 grid place-items-center mb-4"><IconShield width="24" height="24" /></div>
              <h4 className="font-display font-bold text-lg text-navy-900 mb-2">Честная оценка</h4>
              <p className="text-navy-600 text-sm leading-relaxed">Не обещаем 100% одобрения. Заранее показываем слабые места и реальные шансы.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
