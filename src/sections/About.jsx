import Reveal from '../components/Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-navy-50/40 relative overflow-hidden">
      <div aria-hidden className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-navy-100/60 blur-3xl" />

      <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
        <Reveal className="relative">
          <div className="relative max-w-[440px] mx-auto">
            <div className="absolute -inset-3 bg-navy-grad rounded-3xl opacity-10 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-card border border-navy-100">
              <img src="/services-photo.png" alt="Zhuldyz Baubekova" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 card px-5 py-3 flex items-center gap-3">
              <span className="text-3xl font-display font-bold grad-text">17</span>
              <span className="text-sm text-navy-700 leading-tight">лет<br/>в банковской<br/>сфере</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="eyebrow mb-4">Обо мне</span>
          <h2 className="section-title text-[clamp(1.8rem,3.2vw,2.6rem)]">
            Знаю банковскую систему <span className="grad-gold">изнутри</span>
          </h2>
          <div className="mt-5 space-y-4 text-navy-700 text-[1.04rem] leading-relaxed">
            <p>
              Меня зовут <b>Жулдыз Баубекова</b>. Я финансист с <b>17-летним опытом</b> работы в банковской сфере и основатель компании <b>Business Qoldau</b>.
            </p>
            <p>
              Я начинала карьеру с должности <b>кассира</b> и прошла путь до <b>заместителя директора банка</b>. За эти годы я работала с предпринимателями, видела сотни бизнесов изнутри и понимаю, как банки принимают решения по кредитам.
            </p>
            <p>
              Сегодня я помогаю предпринимателям подготовить бизнес к финансированию: проанализировать цифры, документы, учёт, налоговую нагрузку, кредитную историю и выбрать подходящую программу финансирования.
            </p>
          </div>

          <ul className="check-list mt-6 grid sm:grid-cols-2 gap-3">
            <li>17 лет в банковской системе</li>
            <li>От кассира до зам. директора</li>
            <li>Сотни бизнесов изнутри</li>
            <li>Понимаю логику решений банков</li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
