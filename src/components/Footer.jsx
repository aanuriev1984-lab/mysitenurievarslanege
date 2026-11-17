import { Link } from 'react-router-dom'
import { profile } from '../data/content.js'
import { ArrowUpRight } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <span className="brand-mark" aria-hidden="true">
                {profile.initials}
              </span>
              <span className="brand-copy">
                <strong>{profile.fullName}</strong>
                <small>10 класс · личный сайт</small>
              </span>
            </Link>
            <p>
              Личный учебный проект о подготовке к ЕГЭ по истории,
              английскому языку и обществознанию.
            </p>
          </div>

          <nav className="footer-col" aria-label="Навигация в подвале">
            <h2>Разделы</h2>
            <Link to="/">Обо мне</Link>
            <Link to="/subjects">Предметы ЕГЭ</Link>
            <Link to="/subjects#checklist">Мой чек-лист</Link>
          </nav>

          <div className="footer-col footer-author">
            <h2>Автор</h2>
            <strong>{profile.fullName}</strong>
            <span>ученик 10 класса</span>
            <Link to="/subjects" className="footer-link">
              Смотреть маршрут
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {profile.fullName}</span>
          <span>Понимать, а не зубрить</span>
        </div>
      </div>
    </footer>
  )
}
