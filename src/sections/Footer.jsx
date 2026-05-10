import { IconIG, IconWA } from '../components/Icons.jsx'

export default function Footer() {
  return (
    <footer className="bg-navy-grad text-navy-100 pt-14 pb-8 relative overflow-hidden">
      <div aria-hidden className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-navy-500/20 blur-3xl" />
      <div aria-hidden className="absolute -bottom-40 -right-40 w-[460px] h-[460px] rounded-full bg-gold-400/10 blur-3xl" />

      <div className="container-x relative grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <span className="w-12 h-12 rounded-full overflow-hidden bg-white grid place-items-center shrink-0">
              <img src="/logo-business-qoldau.png" alt="Business Qoldau" className="w-[150%] h-[150%] object-cover" />
            </span>
            <div>
              <div className="font-display font-bold text-white text-base">Zhuldyz Baubekova</div>
              <div className="text-sm text-navy-200">Business Qoldau · финансовый консалтинг</div>
            </div>
          </div>
          <p className="mt-5 text-navy-200 text-sm leading-relaxed">
            Команда, которая говорит с банками на одном языке и помогает предпринимателям пройти путь от анализа бизнеса до получения финансирования.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <span className="w-12 h-12 rounded-xl bg-white/10 grid place-items-center backdrop-blur"><img src="/logo-damu.png" alt="Даму" className="w-9 h-9 object-contain" /></span>
            <span className="w-12 h-12 rounded-xl bg-white/10 grid place-items-center backdrop-blur"><img src="/logo-ebrd.png" alt="ЕБРР" className="w-9 h-9 object-contain" /></span>
            <span className="text-xs text-navy-200">Аккредитация<br/>Даму · ЕБРР</span>
          </div>
        </div>

        {/* Nav */}
        <div>
          <div className="font-display font-bold text-white mb-4">Разделы</div>
          <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
            <li><a className="hover:text-white" href="#about">Обо мне</a></li>
            <li><a className="hover:text-white" href="#trust">Доверие</a></li>
            <li><a className="hover:text-white" href="#services">Услуги</a></li>
            <li><a className="hover:text-white" href="#process">Этапы</a></li>
            <li><a className="hover:text-white" href="#education">Обучение</a></li>
            <li><a className="hover:text-white" href="#contact">Контакты</a></li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <div className="font-display font-bold text-white mb-4">Связаться</div>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="https://wa.me/77754492929" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-white">
                <IconWA width="16" height="16" /> +7 775 449 29 29 · zhuldyz.baubekova
              </a>
            </li>
            <li>
              <a href="https://wa.me/77472079300" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-white">
                <IconWA width="16" height="16" /> +7 747 207 93 00 · business_qoldau.kz
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/zhuldyz.baubekova" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-white">
                <IconIG width="16" height="16" /> @zhuldyz.baubekova
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/business_qoldau.kz" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-white">
                <IconIG width="16" height="16" /> @business_qoldau.kz
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x relative mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2 text-xs text-navy-200">
        <span>© {new Date().getFullYear()} Zhuldyz Baubekova · Business Qoldau</span>
        <span>Все права защищены</span>
      </div>
    </footer>
  )
}
