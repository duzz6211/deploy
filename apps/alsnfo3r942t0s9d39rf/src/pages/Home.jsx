import { useEffect, useRef } from 'react'
import Rv from '../components/Reveal'
import Bn from '../components/Btn'
import Pc from '../components/ProjectCard'
import St from '../components/SectionTitle'
import As from '../components/AboutSection'
import Cs from '../components/ContactSection'
import { IM, PJ } from '../data/content'

function He() {
  const bR = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let ra = 0
    const oS = () => {
      cancelAnimationFrame(ra)
      ra = requestAnimationFrame(() => {
        if (bR.current)
          bR.current.style.transform = `translateY(${(window.scrollY * 0.28).toFixed(1)}px)`
      })
    }
    window.addEventListener('scroll', oS, { passive: true })
    return () => {
      cancelAnimationFrame(ra)
      window.removeEventListener('scroll', oS)
    }
  }, [])

  return (
    <section className="hero" id="home">
      <div ref={bR} className="hero-bg" style={{ '--hero-img': `url("${IM.hero}")` }} />
    </section>
  )
}

const SPS = ['col-7', 'col-5', 'col-5', 'col-7']
const WD = [true, false, false, true]

export default function Hm() {
  return (
    <>
      <He />

      <St id="work">Work</St>
      <section className="band work">
        <div className="wrap">
          <div className="work-grid">
            {PJ.slice(0, 4).map((p, i) => (
              <Pc key={p.title} project={p} span={SPS[i]} wide={WD[i]} delay={i % 2} />
            ))}
          </div>
          <Rv className="work-foot">
            <Bn to="/work" className="btn lg ghost" arrow>
              View more
            </Bn>
          </Rv>
        </div>
      </section>

      <As />

      <Cs />
    </>
  )
}
