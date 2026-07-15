import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import Work from './pages/Work'
import { animateScrollTo, prefersReducedMotion, sectionTop } from './lib/scroll'

/** Travel to the linked section (/#about) on navigation, otherwise jump to the top. */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const to = hash ? sectionTop(hash.slice(1)) : null
    if (to === null) {
      window.scrollTo(0, 0)
      return
    }
    if (prefersReducedMotion()) {
      window.scrollTo(0, to)
      return
    }
    // scroll the distance rather than teleporting; cancelled if the user navigates again
    return animateScrollTo(to)
  }, [pathname, hash])

  return null
}

const TITLES = {
  '/': '517 EXHIBITS — High-impact brand experiences',
  '/work': 'Work — 517 EXHIBITS',
}

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = TITLES[pathname] ?? TITLES['/']
  }, [pathname])

  return (
    <>
      <ScrollManager />
      <ScrollProgress />
      <Nav />
      {/* key re-mounts the page on route change → CSS page transition */}
      <main key={pathname} className="page-enter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
