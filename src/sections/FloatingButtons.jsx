import { IconWA, IconIG } from '../components/Icons.jsx'

export default function FloatingButtons() {
  return (
    <div className="fixed right-4 bottom-4 sm:right-5 sm:bottom-5 z-40 flex flex-col gap-3">
      <a href="https://wa.me/77754492929" target="_blank" rel="noopener" aria-label="WhatsApp"
         className="relative w-14 h-14 rounded-full grid place-items-center text-white bg-[#25d366] shadow-card hover:-translate-y-1 transition-transform">
        <span aria-hidden className="absolute inset-0 rounded-full bg-[#25d366] -z-10 animate-ringPulse" />
        <IconWA width="26" height="26" />
      </a>
      <a href="https://www.instagram.com/zhuldyz.baubekova" target="_blank" rel="noopener" aria-label="Instagram"
         className="w-14 h-14 rounded-full grid place-items-center text-white bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#515bd4] shadow-card hover:-translate-y-1 transition-transform">
        <IconIG width="24" height="24" />
      </a>
    </div>
  )
}
