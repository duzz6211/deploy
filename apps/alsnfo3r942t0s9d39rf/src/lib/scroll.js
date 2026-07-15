const DUR = 900

const ez = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2)

export const prm = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function dT(el) {
  let y = 0
  for (let n = el; n; n = n.offsetParent) y += n.offsetTop
  return y
}

function nH() {
  const r = document.documentElement
  return parseFloat(getComputedStyle(r).getPropertyValue('--nav-h')) || 0
}

export function stp(id) {
  const el = document.getElementById(id)
  return el ? dT(el) - nH() : null
}

let av = null

const INT = ['wheel', 'touchstart', 'keydown']

export function ast(to, { duration = DUR, onDone } = {}) {
  const r = document.documentElement
  if (av) av()

  const mx = Math.max(0, r.scrollHeight - window.innerHeight)
  const fr = window.scrollY
  const ds = Math.min(Math.max(to, 0), mx) - fr

  if (Math.abs(ds) < 1) {
    onDone?.()
    return () => {}
  }

  let rf = 0
  let sr = 0
  const sp = () => {
    cancelAnimationFrame(rf)
    r.style.scrollBehavior = ''
    for (const ty of INT) window.removeEventListener(ty, sp)
    av = null
  }

  r.style.scrollBehavior = 'auto'
  av = sp
  for (const ty of INT) window.addEventListener(ty, sp, { passive: true })

  const st = (nw) => {
    if (!sr) sr = nw
    const t = Math.min((nw - sr) / duration, 1)
    window.scrollTo(0, fr + ds * ez(t))
    if (t < 1) {
      rf = requestAnimationFrame(st)
      return
    }
    sp()
    onDone?.()
  }
  rf = requestAnimationFrame(st)
  return sp
}
