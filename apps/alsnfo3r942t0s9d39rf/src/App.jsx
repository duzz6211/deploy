import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nv from './components/Nav'
import Ft from './components/Footer'
import Sp from './components/ScrollProgress'
import Hm from './pages/Home'
import Wk from './pages/Work'
import { ast, prm, stp } from './lib/scroll'

function Sm() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const to = hash ? stp(hash.slice(1)) : null
    if (to === null) {
      window.scrollTo(0, 0)
      return
    }
    if (prm()) {
      window.scrollTo(0, to)
      return
    }
    return ast(to)
  }, [pathname, hash])

  return null
}

const TL = {
  '/': '517 EXHIBITS — High-impact brand experiences',
  '/work': 'Work — 517 EXHIBITS',
}

export default function Ap() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = TL[pathname] ?? TL['/']
  }, [pathname])

  return (
    <>
      <Sm />
      <Sp />
      <Nv />
      <main key={pathname} className="page-enter">
        <Routes>
          <Route path="/" element={<Hm />} />
          <Route path="/work" element={<Wk />} />
          <Route path="*" element={<Hm />} />
        </Routes>
      </main>
      <Ft />
    </>
  )
}
