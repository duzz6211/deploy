import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import Reveal from '../components/Reveal'
import { IMG, SERVICES, PROCESS } from '../data/content'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title={
          <>
            Full-service exhibition <em>design &amp; production</em>.
          </>
        }
        lede="From first concept to final teardown, we handle every stage of your exhibition in-house — strategy, design, fabrication, logistics and on-site delivery."
        crumb="Services"
        image={IMG.svcHero}
      />

      {/* Services grid */}
      <section className="band pad-96">
        <div className="wrap">
          <Reveal className="sec-head-c">
            <div className="title-line" />
            <p className="eyebrow">Capabilities</p>
            <h2>Everything your brand needs on the show floor.</h2>
            <p>Six core services that combine into a single, seamless production — so nothing falls between the cracks.</p>
          </Reveal>

          <div className="cards">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i % 3} className="card">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {s.icon}
                  </svg>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="band pad-96 alt">
        <div className="wrap">
          <Reveal className="sec-head-c">
            <div className="title-line" />
            <p className="eyebrow">How we work</p>
            <h2>A clear path from brief to build.</h2>
            <p>A proven four-stage process that keeps every project on brief, on budget and on the day it matters most.</p>
          </Reveal>

          <div className="process">
            {PROCESS.map((step, i) => (
              <Reveal key={step.num} delay={i} className="step">
                <div className="num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's scope your next build."
        lede="Tell us about your show, timeline and goals — we'll put together an approach and a ballpark within days."
      />
    </>
  )
}
