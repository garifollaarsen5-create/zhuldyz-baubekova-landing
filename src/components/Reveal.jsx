import { useEffect, useRef } from 'react'

export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Hard fallback: ensure content is visible no matter what
    const fallback = setTimeout(() => el.classList.add('in'), 700)

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('in')
      return () => clearTimeout(fallback)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (delay) setTimeout(() => el.classList.add('in'), delay)
            else el.classList.add('in')
            io.unobserve(el)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px 200px 0px' }
    )
    io.observe(el)
    return () => { io.disconnect(); clearTimeout(fallback) }
  }, [delay])

  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  )
}
