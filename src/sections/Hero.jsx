import Reveal from '../components/Reveal.jsx'
import { IconArrow, IconWA, IconShield } from '../components/Icons.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden isolate">
      {/* Background — soft gradient, no heavy blurs (mobile perf) */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-50 via-white to-navy-50" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-dots opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_30%,transparent_75%)]" />

      <div className="container-x grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center pt-12 lg:pt-20 pb-16 lg:pb-24">
        <Reveal>
          <span className="eyebrow-gold mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            17 лет в банковской системе · Аккредитация Даму и ЕБРР
          </span>
          <h1 className="section-title text-[clamp(2rem,4.6vw,3.6rem)]">
            Помогаю бизнесу <span className="grad-gold">привлекать финансирование</span>
            <br className="hidden md:block" /> и получать кредиты на развитие
          </h1>
          <p className="mt-5 text-navy-700 text-lg max-w-xl">
            17 лет в банковской сфере. Более <b>5 млрд ₸</b> привлечено для бизнеса.
            Основатель <b>Business Qoldau</b> — консалтинговой компании, аккредитованной Фондом «Даму» и ЕБРР.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-gold">
              Получить консультацию <IconArrow />
            </a>
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gold-400/10 border border-gold-400/40 text-gold-700 font-bold text-sm">
              <span className="w-6 h-6 rounded-md bg-gold-grad text-navy-900 grid place-items-center text-[11px] font-display font-bold">₸</span>
              20 000 ₸
            </span>
            <a href="https://wa.me/77754492929" target="_blank" rel="noopener" className="btn-ghost">
              <IconWA width="18" height="18" /> Написать в WhatsApp
            </a>
          </div>

          {/* Quick trust strip */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2 text-navy-600 text-sm">
              <IconShield width="18" height="18" className="text-gold-600" /> Аккредитация Даму
            </div>
            <div className="hidden sm:block w-px h-4 bg-navy-200" />
            <div className="flex items-center gap-2 text-navy-600 text-sm">
              <IconShield width="18" height="18" className="text-gold-600" /> Аккредитация ЕБРР
            </div>
            <div className="hidden sm:block w-px h-4 bg-navy-200" />
            <div className="flex items-center gap-2 text-navy-600 text-sm">
              <span className="font-bold text-navy-900">5+ млрд ₸</span> привлечено клиентам
            </div>
          </div>
        </Reveal>

        {/* Photo column */}
        <Reveal className="relative">
          <div className="relative mx-auto w-[min(420px,86%)] sm:w-[min(440px,100%)] aspect-square">
            {/* gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-400 via-white to-navy-200 p-[5px] sm:p-[6px] shadow-glow">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img src="/zhuldyz-photo.jpg" alt="Жулдыз Баубекова"
                     className="w-full h-full object-cover object-top" />
              </div>
            </div>

            {/* Floating cards — compact on mobile */}
            <div className="absolute left-0 sm:-left-6 top-3 sm:top-6 card px-2 py-1.5 sm:px-4 sm:py-3 flex items-center gap-1.5 sm:gap-3 animate-floaty delay-1">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-navy-grad text-white grid place-items-center font-display font-bold text-[11px] sm:text-base">17</div>
              <div className="leading-tight">
                <div className="font-bold text-navy-900 text-[11px] sm:text-sm">лет в банке</div>
                <div className="text-[9px] sm:text-xs text-navy-500 hidden sm:block">от кассира до зам. директора</div>
              </div>
            </div>

            <div className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 card px-2 py-1.5 sm:px-4 sm:py-3 flex items-center gap-1.5 sm:gap-3 animate-floaty delay-2">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gold-grad text-navy-900 grid place-items-center font-display font-bold text-[10px] sm:text-[13px]">5+</div>
              <div className="leading-tight">
                <div className="font-bold text-navy-900 text-[11px] sm:text-sm">млрд ₸</div>
                <div className="text-[9px] sm:text-xs text-navy-500 hidden sm:block">привлечено для бизнеса</div>
              </div>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 -bottom-3 sm:-bottom-4 card px-2 py-1.5 sm:px-4 sm:py-3 flex items-center gap-1.5 sm:gap-3 animate-floaty delay-3">
              <span className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-white ring-1 ring-navy-100 overflow-hidden grid place-items-center shrink-0">
                <img src="/logo-damu.png" alt="Даму" className="w-full h-full object-contain p-0.5 sm:p-1" />
              </span>
              <span className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-white ring-1 ring-navy-100 overflow-hidden grid place-items-center shrink-0">
                <img src="/logo-ebrd.png" alt="ЕБРР" className="w-full h-full object-contain p-0.5 sm:p-1" />
              </span>
              <div className="leading-tight">
                <div className="font-bold text-navy-900 text-[11px] sm:text-sm">Аккредитация</div>
                <div className="text-[9px] sm:text-xs text-navy-500 hidden sm:block">Даму · ЕБРР</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
