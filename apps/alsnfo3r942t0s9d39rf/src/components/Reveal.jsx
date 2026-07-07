import useReveal from '../hooks/useReveal'

/**
 * Scroll-reveal wrapper. `delay` maps to the .d1/.d2/.d3 stagger classes.
 * Usage: <Reveal as="p" delay={2} className="lede">…</Reveal>
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useReveal()
  const cls = ['reveal', delay ? `d${delay}` : '', className].filter(Boolean).join(' ')
  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  )
}
