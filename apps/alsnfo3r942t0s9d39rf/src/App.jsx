import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import Work from './pages/Work'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const TITLES = {
  '/': '517 EXHIBITS — High-impact brand experiences',
  '/work': 'Work — 517 EXHIBITS',
  '/services': 'Services — 517 EXHIBITS',
  '/about': 'About — 517 EXHIBITS',
  '/contact': 'Contact — 517 EXHIBITS',
}

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = TITLES[pathname] ?? TITLES['/']
  }, [pathname])

  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <CustomCursor />
      <Nav />
      {/* key re-mounts the page on route change → CSS page transition */}
      <main key={pathname} className="page-enter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
