import Reveal from './Reveal'

/** Full-bleed black title band that opens each section of the home page. */
export default function SectionTitle({ id, children }) {
  return (
    <Reveal as="h2" id={id} className="sec-title">
      {children}
    </Reveal>
  )
}
