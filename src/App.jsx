import { useEffect } from 'react'
import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Subjects from './pages/Subjects.jsx'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return undefined
    }

    const id = decodeURIComponent(hash.replace('#', ''))
    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(id)
      if (!target) return
      const headerOffset = 92
      const top =
        target.getBoundingClientRect().top + window.scrollY - headerOffset
      window.scrollTo({
        top: Math.max(top, 0),
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}

function SkipLink() {
  const handleClick = (event) => {
    event.preventDefault()
    const target = document.getElementById('main-content')
    if (!target) return
    target.focus({ preventScroll: true })
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <a className="skip-link" href="#main-content" onClick={handleClick}>
      Перейти к содержанию
    </a>
  )
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <SkipLink />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
