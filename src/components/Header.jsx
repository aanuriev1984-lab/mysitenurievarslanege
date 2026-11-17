import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { profile } from '../data/content.js'
import { ArrowUpRight, CloseIcon, MenuIcon } from './Icons.jsx'

const links = [
  { to: '/', label: 'Обо мне' },
  { to: '/subjects', label: 'Предметы ЕГЭ' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname, hash])

  useEffect(() => {
    document.body.classList.toggle('menu-locked', open)
    return () => document.body.classList.remove('menu-locked')
  }, [open])

  useEffect(() => {
    if (!open) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const handleResize = () => {
      if (window.innerWidth > 860) setOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [open])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Нуриев Арслан — на главную">
          <span className="brand-mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="brand-copy">
            <strong>{profile.fullName}</strong>
            <small>10 класс · личный сайт</small>
          </span>
        </Link>

        <nav
          id="primary-navigation"
          className={`header-nav ${open ? 'is-open' : ''}`}
          aria-label="Основная навигация"
        >
          <div className="header-nav-links">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'is-active' : ''}`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <Link
            to="/subjects#checklist"
            className="header-cta"
            onClick={() => setOpen(false)}
          >
            Мой чек-лист
            <ArrowUpRight size={16} />
          </Link>

          <p className="header-nav-note">
            История · Английский · Общество
          </p>
        </nav>

        <button
          type="button"
          className={`burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          {open ? <CloseIcon size={23} /> : <MenuIcon size={23} />}
        </button>
      </div>
    </header>
  )
}
