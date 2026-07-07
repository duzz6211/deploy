import useCountUp from '../hooks/useCountUp'

/** Animated count-up stat (e.g. 450+, 15yr). */
export default function StatCounter({ value, suffix = '', label }) {
  const [ref, n] = useCountUp(value)
  return (
    <div ref={ref} className="stat">
      <div className="n">
        {n}
        {suffix && <em>{suffix}</em>}
      </div>
      <div className="l">{label}</div>
    </div>
  )
}
