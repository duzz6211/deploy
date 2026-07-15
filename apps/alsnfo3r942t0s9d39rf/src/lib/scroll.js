/** Animated scrolling shared by the nav links and the hero wheel-snap. */

const DURATION = 900

/** eases in from rest, then lands soft instead of slamming into the target */
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2)

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Layout offset of `el` from the document top — immune to the .reveal transform. */
function docTop(el) {
  let y = 0
  for (let n = el; n; n = n.offsetParent) y += n.offsetTop
  return y
}

/** Height of the fixed header — the same value the anchors use as scroll-margin-top. */
function navHeight() {
  const root = document.documentElement
  return parseFloat(getComputedStyle(root).getPropertyValue('--nav-h')) || 0
}

/** Where the page must sit for section `id` to clear the fixed header. null if absent. */
export function sectionTop(id) {
  const el = document.getElementById(id)
  return el ? docTop(el) - navHeight() : null
}

let active = null

/** anything the user does to scroll for themselves aborts the flight mid-air */
const INTERRUPTS = ['wheel', 'touchstart', 'keydown']

/**
 * Fly the window to `to` over `duration` ms, superseding any flight already running.
 * Returns a cancel function; `onDone` fires only on a landing, never on a cancel.
 */
export function animateScrollTo(to, { duration = DURATION, onDone } = {}) {
  const root = document.documentElement
  if (active) active()

  const max = Math.max(0, root.scrollHeight - window.innerHeight)
  const from = window.scrollY
  const dist = Math.min(Math.max(to, 0), max) - from

  // already there: settle the caller now rather than pinning the page for a full duration
  if (Math.abs(dist) < 1) {
    onDone?.()
    return () => {}
  }

  let raf = 0
  let start = 0
  const stop = () => {
    cancelAnimationFrame(raf)
    root.style.scrollBehavior = ''
    for (const type of INTERRUPTS) window.removeEventListener(type, stop)
    active = null
  }

  // the global `scroll-behavior:smooth` would fight the per-frame scrollTo below
  root.style.scrollBehavior = 'auto'
  active = stop
  for (const type of INTERRUPTS) window.addEventListener(type, stop, { passive: true })

  const step = (now) => {
    if (!start) start = now
    const t = Math.min((now - start) / duration, 1)
    window.scrollTo(0, from + dist * ease(t))
    if (t < 1) {
      raf = requestAnimationFrame(step)
      return
    }
    stop()
    onDone?.()
  }
  raf = requestAnimationFrame(step)
  return stop
}
