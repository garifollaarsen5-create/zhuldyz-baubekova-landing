import Reveal from '../components/Reveal.jsx'

export default function Mission() {
  return (
    <section id="mission" className="py-14 lg:py-20 relative overflow-hidden text-white"
             style={{ backgroundColor: '#081c3d', backgroundImage: 'linear-gradient(135deg, #143464 0%, #081c3d 100%)' }}>
      <div aria-hidden className="absolute inset-0 bg-dots opacity-10" />

      <div className="container-x relative text-center max-w-3xl mx-auto">
        <Reveal>
          <span className="eyebrow-gold mb-5">Наша миссия</span>
          <p className="font-display font-bold leading-[1.25] text-[clamp(1.4rem,2.6vw,2.1rem)] break-words">
            «Сопровождать предпринимателей к&nbsp;
            <span className="grad-gold">финансированию, развитию и&nbsp;росту</span>
            &nbsp;бизнеса.»
          </p>
          <div className="mt-5 mx-auto w-16 h-[3px] rounded-full bg-gold-grad" />
        </Reveal>
      </div>
    </section>
  )
}
