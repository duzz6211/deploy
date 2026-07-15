import Rv from './Reveal'

export default function St({ id, children }) {
  return (
    <Rv as="h2" id={id} className="sec-title">
      {children}
    </Rv>
  )
}
