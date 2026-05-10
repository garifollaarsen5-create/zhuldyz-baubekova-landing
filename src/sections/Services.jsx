import Reveal from '../components/Reveal.jsx'
import { IconBank, IconChart, IconBriefcase, IconCalc, IconHandshake } from '../components/Icons.jsx'

const SERVICES = [
  {
    icon: IconBank,
    title: 'Сопровождение при получении бизнес-кредита',
    text: 'Анализируем бизнес, подбираем банк и программу, готовим пакет документов и сопровождаем клиента до решения.',
    accent: true,
  },
  {
    icon: IconHandshake,
    title: 'Привлечение инвестиций',
    text: 'Готовим бизнес для инвестора: финансы, показатели, структура, документы и презентация проекта.',
  },
  {
    icon: IconChart,
    title: 'Финансовый консалтинг',
    text: 'Разбираем финансовое состояние бизнеса, находим слабые места, помогаем принимать решения на основе цифр.',
  },
  {
    icon: IconCalc,
    title: 'Бухгалтерский аутсорсинг',
    text: 'Ведём учёт, налоги и отчётность. Делаем бизнес прозрачным для банков и инвесторов.',
  },
  {
    icon: IconBriefcase,
    title: 'Подготовка бизнеса к финансированию',
    text: 'Проверяем обороты, налоги, кредитную историю, залоги, финансовую отчётность и управленческий учёт.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow mb-4">Чем мы помогаем</span>
          <h2 className="section-title text-[clamp(1.8rem,3.2vw,2.6rem)]">
            Полный цикл — от анализа <span className="grad-gold">до получения финансирования</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={i} delay={i * 70}>
                <article className={`relative group h-full rounded-3xl p-7 border transition-all duration-300
                  ${s.accent
                    ? 'text-white border-transparent shadow-glow'
                    : 'bg-white text-navy-800 border-navy-100 shadow-soft hover:-translate-y-1 hover:shadow-card hover:border-navy-200'}`}
                  style={s.accent ? { backgroundColor: '#081c3d', backgroundImage: 'linear-gradient(135deg, #143464 0%, #081c3d 100%)' } : undefined}>
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-2xl grid place-items-center mb-5
                      ${s.accent ? 'bg-white/15 text-white' : 'bg-navy-50 text-navy-700 group-hover:rotate-[-6deg] transition-transform'}`}>
                      <Icon width="28" height="28" />
                    </div>
                    <h3 className={`font-display font-bold text-lg leading-snug mb-2.5 ${s.accent ? 'text-white' : 'text-navy-900'}`}>
                      {s.title}
                    </h3>
                    <p className={`text-[0.97rem] leading-relaxed ${s.accent ? 'text-navy-100' : 'text-navy-600'}`}>
                      {s.text}
                    </p>
                  </div>
                  <span className={`absolute top-6 right-6 font-display font-bold text-xl
                    ${s.accent ? 'text-white/30' : 'text-navy-100'}`}>
                    0{i+1}
                  </span>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
