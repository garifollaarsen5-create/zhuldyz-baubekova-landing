import { useEffect, useState } from 'react'
import { IconIG } from '../components/Icons.jsx'

const NAV = [
  { href: '#about',     label: 'Обо мне' },
  { href: '#trust',     label: 'Доверие' },
  { href: '#services',  label: 'Услуги' },
  { href: '#process',   label: 'Этапы' },
  { href: '#education', label: 'Обучение' },
  { href: '#contact',   label: 'Контакты' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-40 transition-all ${scrolled ? 'bg-white border-b border-navy-100 shadow-soft' : 'bg-white'}`}>
      <div className="container-x flex items-center justify-between gap-2 sm:gap-3 py-3">
        <a href="#top" className="flex items-center gap-2 sm:gap-3 group min-w-0 flex-1">
          <span className="w-11 h-11 rounded-full overflow-hidden bg-white ring-2 ring-navy-100 shadow-soft shrink-0 grid place-items-center">
            <img src="/logo-business-qoldau.png" alt="Business Qoldau"
                 className="w-[150%] h-[150%] object-cover scale-[1.15]" />
          </span>
          <span className="leading-tight min-w-0">
            <span className="block font-display font-bold text-navy-900 text-[14px] sm:text-base truncate">Zhuldyz Baubekova</span>
            <span className="hidden sm:block text-[11px] text-navy-500 font-semibold tracking-wide">BUSINESS QOLDAU · Финансовый консалтинг</span>
            <span className="sm:hidden block text-[10px] text-navy-500 font-semibold tracking-wide">Business Qoldau</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}
               className="text-sm font-semibold text-navy-700 hover:text-navy-950 relative group">
              {n.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gold-grad rounded-full transition-all duration-300 group-hover:w-full"/>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="https://www.instagram.com/zhuldyz.baubekova" target="_blank" rel="noopener"
             aria-label="Instagram"
             className="hidden sm:grid w-10 h-10 place-items-center rounded-full bg-navy-50 text-navy-700 hover:bg-navy-grad hover:text-white transition-all hover:-translate-y-0.5">
            <IconIG width="20" height="20" />
          </a>
          <a href="#contact" className="hidden sm:inline-flex btn-gold !px-4 !py-2.5 text-sm">
            Заявка
          </a>
          <button
            aria-label="Меню"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 grid place-items-center rounded-xl bg-navy-50 text-navy-700">
            <span className="relative w-5 h-4 block">
              <span className={`absolute left-0 right-0 h-[2px] bg-current rounded transition-all ${open ? 'top-1.5 rotate-45' : 'top-0'}`}/>
              <span className={`absolute left-0 right-0 h-[2px] bg-current rounded top-1.5 transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`}/>
              <span className={`absolute left-0 right-0 h-[2px] bg-current rounded transition-all ${open ? 'top-1.5 -rotate-45' : 'top-3'}`}/>
            </span>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-[max-height] duration-300 bg-white border-t border-navy-100 ${open ? 'max-h-[420px]' : 'max-h-0'}`}>
        <div className="container-x py-3 flex flex-col gap-1">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}
               className="px-3 py-2.5 rounded-xl text-navy-800 font-semibold hover:bg-navy-50">
              {n.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-gold mt-2">Оставить заявку</a>
        </div>
      </div>
    </header>
  )
}
