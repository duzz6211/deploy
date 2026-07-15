import { useEffect, useRef } from 'react'
import Reveal from '../components/Reveal'
import Btn from '../components/Btn'
import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import { IMG, PROJECTS } from '../data/content'

function Hero() {
  const bgRef = useRef(null)

  // parallax: background layer drifts slower than scroll
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (bgRef.current)
          bgRef.current.style.transform = `translateY(${(window.scrollY * 0.28).toFixed(1)}px)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section className="hero" id="home">
      <div ref={bgRef} className="hero-bg" style={{ '--hero-img': `url("${IMG.hero}")` }} />
    </section>
  )
}

const SPANS = ['col-7', 'col-5', 'col-5', 'col-7']
const WIDE = [true, false, false, true]

export default function Home() {
  return (
    <>
      <Hero />

      {/* Work teaser — "View more" is the only route through to the Work page */}
      <SectionTitle id="work">Work</SectionTitle>
      <section className="band work">
        <div className="wrap">
          <div className="work-grid">
            {PROJECTS.slice(0, 4).map((p, i) => (
              <ProjectCard key={p.title} project={p} span={SPANS[i]} wide={WIDE[i]} delay={i % 2} />
            ))}
          </div>
          <Reveal className="work-foot">
            <Btn to="/work" className="btn lg ghost" arrow>
              View more
            </Btn>
          </Reveal>
        </div>
      </section>

      <AboutSection />

      <ContactSection />
    </>
  )
}
