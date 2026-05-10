import { IconIG, IconWA } from '../components/Icons.jsx'

export default function Footer() {
  return (
    <footer
      className="text-white pt-12 pb-7 relative"
      style={{
        backgroundColor: '#081c3d',
        backgroundImage: 'linear-gradient(135deg, #143464 0%, #081c3d 100%)',
      }}
    >
      <div className="container-x grid md:grid-cols-3 gap-7 md:gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <span
              className="w-12 h-12 rounded-full overflow-hidden grid place-items-center shrink-0"
              style={{ backgroundColor: '#ffffff' }}
            >
              <img src="/logo-business-qoldau.png" alt="Business Qoldau"
                   className="w-[150%] h-[150%] object-cover" />
            </span>
            <div>
              <div className="font-display font-bold text-white text-base">Zhuldyz Baubekova</div>
              <div className="text-sm" style={{ color: '#a9bfe2' }}>Business Qoldau · финансовый консалтинг</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed" style={{ color: '#a9bfe2' }}>
            Команда, которая говорит с банками на одном языке и помогает предпринимателям пройти путь от анализа бизнеса до получения финансирования.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <span className="w-12 h-12 rounded-xl grid place-items-center"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
              <img src="/logo-damu.png" alt="Даму" className="w-9 h-9 object-contain" />
            </span>
            <span className="w-12 h-12 rounded-xl grid place-items-center"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
              <img src="/logo-ebrd.png" alt="ЕБРР" className="w-9 h-9 object-contain" />
            </span>
            <span className="text-xs" style={{ color: '#a9bfe2' }}>
              Аккредитация<br/>Даму · ЕБРР
            </span>
          </div>
        </div>

        {/* Nav */}
        <div>
          <div className="font-display font-bold text-white mb-4">Разделы</div>
          <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm" style={{ color: '#cfd9ee' }}>
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
          <ul className="space-y-3 text-sm" style={{ color: '#cfd9ee' }}>
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

      <div
        className="container-x mt-8 pt-5 flex flex-col sm:flex-row justify-between gap-2 text-xs"
        style={{ borderTop: '1px solid rgba(255,255,255,0.12)', color: '#a9bfe2' }}
      >
        <span>© {new Date().getFullYear()} Zhuldyz Baubekova · Business Qoldau</span>
        <span>Все права защищены</span>
      </div>
    </footer>
  )
}
