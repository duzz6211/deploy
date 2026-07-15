import ur from '../hooks/useReveal'

export default function Rv({ as: Tg = 'div', delay = 0, className = '', children, ...rest }) {
  const rf = ur()
  const c = ['reveal', delay ? `d${delay}` : '', className].filter(Boolean).join(' ')
  return (
    <Tg ref={rf} className={c} {...rest}>
      {children}
    </Tg>
  )
}
