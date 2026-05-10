import Reveal from '../components/Reveal.jsx'
import { IconArrow, IconWA, IconShield } from '../components/Icons.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden isolate">
      {/* Background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-navy-radial" />
        <div className="absolute inset-0 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_30%,transparent_75%)]" />
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-navy-200/60 blur-[100px]" />
        <div className="absolute -bottom-32 -left-24 w-[460px] h-[460px] rounded-full bg-gold-400/25 blur-[100px]" />
      </div>

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

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-gold">
              Получить консультацию <IconArrow />
            </a>
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
          <div className="relative mx-auto w-[min(440px,100%)] aspect-square">
            {/* halo */}
            <div className="absolute -inset-6 bg-gold-grad rounded-full opacity-25 blur-2xl" />
            {/* gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-400 via-white to-navy-200 p-[6px] shadow-glow">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img src="/zhuldyz-photo.png" alt="Жулдыз Баубекова"
                     className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -left-2 sm:-left-6 top-6 card px-4 py-3 flex items-center gap-3 animate-floaty delay-1">
              <div className="w-10 h-10 rounded-xl bg-navy-grad text-white grid place-items-center font-display font-bold">17</div>
              <div className="leading-tight">
                <div className="font-bold text-navy-900 text-sm">лет в банке</div>
                <div className="text-xs text-navy-500">от кассира до зам. директора</div>
              </div>
            </div>

            <div className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 card px-4 py-3 flex items-center gap-3 animate-floaty delay-2">
              <div className="w-10 h-10 rounded-xl bg-gold-grad text-navy-900 grid place-items-center font-display font-bold text-[13px]">5+</div>
              <div className="leading-tight">
                <div className="font-bold text-navy-900 text-sm">млрд ₸</div>
                <div className="text-xs text-navy-500">привлечено для бизнеса</div>
              </div>
            </div>

            <div className="absolute left-6 -bottom-2 sm:-bottom-4 card px-4 py-3 flex items-center gap-3 animate-floaty delay-3">
              <span className="w-9 h-9 rounded-full bg-white ring-1 ring-navy-100 overflow-hidden grid place-items-center">
                <img src="/logo-damu.png" alt="Даму" className="w-full h-full object-contain p-1" />
              </span>
              <span className="w-9 h-9 rounded-full bg-white ring-1 ring-navy-100 overflow-hidden grid place-items-center">
                <img src="/logo-ebrd.png" alt="ЕБРР" className="w-full h-full object-contain p-1" />
              </span>
              <div className="leading-tight">
                <div className="font-bold text-navy-900 text-sm">Аккредитация</div>
                <div className="text-xs text-navy-500">Даму · ЕБРР</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
