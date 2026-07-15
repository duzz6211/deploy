import uc from '../hooks/useCountUp'

export default function Sc({ value, suffix = '', label }) {
  const [rf, n] = uc(value)
  return (
    <div ref={rf} className="stat">
      <div className="n">
        {n}
        {suffix && <em>{suffix}</em>}
      </div>
      <div className="l">{label}</div>
    </div>
  )
}
