import Rv from './Reveal'
import St from './SectionTitle'
import craft from '../../asset/img/about_1.webp'
import team from '../../asset/img/about_2.webp'
import { VL } from '../data/content'

export default function As() {
  return (
    <div>
      <St id="about">Our story</St>

      <section className="band pad-96">
        <div className="wrap">
          <div className="split">
            <Rv className="split-copy">
              <h2>Built on craft, obsessed with detail.</h2>
            </Rv>
            <Rv delay={1} className="split-media">
              <img src={craft} alt="517 EXHIBITS team crafting an exhibition environment" />
            </Rv>
          </div>
        </div>
      </section>

      <section className="band pad-96 alt">
        <div className="wrap">
          <div className="split">
            <Rv className="split-media square">
              <img src={team} alt="517 EXHIBITS designers and fabricators at work" />
            </Rv>
            <Rv delay={1} className="split-copy">
              <p>
                At 517 EXHIBITS, we bring a global perspective and meticulous execution to every
                project — supporting brands from concept to completion. We believe every space
                should tell a compelling story, and we obsess over the details that make that story
                unforgettable.
              </p>
              <p>
                Our multidisciplinary team of designers, fabricators and producers works as one, so
                your exhibition is delivered on brief, on budget, and on the day it matters most.
              </p>
            </Rv>
          </div>
        </div>
      </section>

      <section className="band pad-96">
        <div className="wrap">
          <Rv className="sec-head-c">
            <div className="title-line" />
            <p className="eyebrow">What drives us</p>
            <h2>The principles behind every build.</h2>
            <p>
              Three values that shape how we design, fabricate and deliver — on every floor, in
              every city.
            </p>
          </Rv>
          <div className="cards">
            {VL.map((x, i) => (
              <Rv key={x.title} delay={i} className="card">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {x.icon}
                  </svg>
                </div>
                <h3>{x.title}</h3>
                <p>{x.desc}</p>
              </Rv>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
