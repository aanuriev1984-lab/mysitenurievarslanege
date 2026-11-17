import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  marqueeItems,
  principles,
  profile,
  roadmap,
  subjects,
} from '../data/content.js'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  SparkIcon,
  SubjectIcon,
} from '../components/Icons.jsx'

export default function Home() {
  useEffect(() => {
    document.title =
      'Нуриев Арслан — личный сайт десятиклассника | Подготовка к ЕГЭ'
  }, [])

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              10 класс · личный сайт · готовлюсь к ЕГЭ
            </p>

            <h1 className="hero-title" id="hero-title">
              <span className="hero-title-overline">{profile.lastName}</span>
              <span className="hero-title-name">
                {profile.firstName}
                <span className="title-dot" aria-hidden="true">
                  .
                </span>
              </span>
            </h1>

            <p className="hero-lead">{profile.heroLead}</p>

            <div className="hero-actions">
              <Link to="/subjects" className="button button--primary">
                Мои предметы
                <ArrowRight size={18} />
              </Link>
              <Link to="/#about" className="button button--ghost">
                Познакомиться
                <ArrowDown size={17} />
              </Link>
            </div>

            <p className="hero-footnote">
              <span aria-hidden="true">→</span> Этот сайт — мой рабочий дневник
              подготовки, а не витрина идеального ученика.
            </p>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="hero-art-disc" />
            <div className="hero-art-ring" />
            <div className="hero-art-grid" />

            <div className="id-card">
              <div className="id-card-head">
                <span>Личное дело</span>
                <span>2026 / 27</span>
              </div>

              <div className="id-card-main">
                <span className="id-monogram">АН</span>
                <div className="id-name">
                  <span>Ученик 10 класса</span>
                  <strong>
                    Нуриев
                    <br />
                    Арслан
                  </strong>
                </div>
              </div>

              <div className="id-tags">
                <span className="tag tag--history">История</span>
                <span className="tag tag--english">English</span>
                <span className="tag tag--society">Общество</span>
              </div>

              <div className="id-card-foot">
                <span>Гуманитарный трек</span>
                <span className="id-barcode">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
              </div>
            </div>

            <div className="hero-sticker">
              <span>моя установка</span>
              <strong>
                не зубрить.
                <br />
                понимать.
              </strong>
            </div>

            <div className="hero-mini">
              <span>Цель</span>
              <strong>
                3 предмета
                <br />
                без паники
              </strong>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy}>
              {marqueeItems.map((item) => (
                <span key={`${copy}-${item}`}>
                  {item}
                  <SparkIcon size={14} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="container">
          <div className="section-head">
            <div className="section-head-main">
              <span className="section-index">01</span>
              <h2 id="about-title">Немного обо мне</h2>
            </div>
            <p className="section-head-note">
              Личный маршрут без идеальной картинки
            </p>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p className="about-lead">{profile.aboutLead}</p>
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <span className="signature" aria-hidden="true">
                Арслан
              </span>
            </div>

            <aside className="about-aside" aria-label="Кратко обо мне">
              <dl className="facts-grid">
                {profile.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="now-card">
                <div className="now-card-head">
                  <span className="status-dot status-dot--light" aria-hidden="true" />
                  Сейчас в работе
                </div>
                <ul>
                  {profile.now.map((item) => (
                    <li key={item.label} className={`tone-${item.tone}`}>
                      <span className="now-dot" aria-hidden="true" />
                      <div>
                        <strong>{item.label}</strong>
                        <span>{item.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link to="/subjects#checklist" className="now-link">
                  Открыть чек-лист
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section
        className="section preview-section"
        aria-labelledby="subjects-preview-title"
      >
        <div className="container">
          <div className="section-head">
            <div className="section-head-main">
              <span className="section-index">02</span>
              <h2 id="subjects-preview-title">Мои предметы</h2>
            </div>
            <Link to="/subjects" className="text-link">
              Все предметы
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="preview-grid">
            {subjects.map((subject) => (
              <Link
                key={subject.id}
                to={`/subjects#${subject.id}`}
                className={`preview-card tone-${subject.tone}`}
              >
                <div className="preview-card-head">
                  <span className="preview-number">{subject.number}</span>
                  <span className="preview-icon">
                    <SubjectIcon name={subject.icon} size={25} />
                  </span>
                </div>

                <div className="preview-card-body">
                  <span className="preview-exam">{subject.exam}</span>
                  <h3>{subject.name}</h3>
                  <p>{subject.summary}</p>
                  <div className="preview-topics">
                    {subject.topics.slice(0, 2).map((topic) => (
                      <span key={topic}>{topic}</span>
                    ))}
                  </div>
                </div>

                <span className="preview-link">
                  Смотреть
                  <ArrowUpRight size={17} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="principles-section"
        id="approach"
        aria-labelledby="approach-title"
      >
        <div className="container">
          <div className="section-head section-head--light">
            <div className="section-head-main">
              <span className="section-index">03</span>
              <h2 id="approach-title">Как я готовлюсь</h2>
            </div>
            <p className="section-head-note">
              Четыре правила, которые помогают не выгорать
            </p>
          </div>

          <div className="principles-grid">
            {principles.map((principle, index) => (
              <article className="principle" key={principle.title}>
                <span className="principle-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>

          <blockquote className="principles-quote">
            «Подготовка — это не марафон перед экзаменом. Это привычка.»
          </blockquote>
        </div>
      </section>

      <section
        className="section roadmap-section"
        id="route"
        aria-labelledby="roadmap-title"
      >
        <div className="container">
          <div className="section-head">
            <div className="section-head-main">
              <span className="section-index">04</span>
              <h2 id="roadmap-title">Мой маршрут</h2>
            </div>
            <p className="section-head-note">
              От базы в 10 классе до спокойного экзамена
            </p>
          </div>

          <div className="roadmap-grid">
            {roadmap.map((step, index) => (
              <article
                className={`roadmap-step ${index === 0 ? 'is-current' : ''}`}
                key={step.year}
              >
                <div className="roadmap-top">
                  <span className="roadmap-label">{step.label}</span>
                  <span className="roadmap-year">{step.year}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <span className="roadmap-number" aria-hidden="true">
                  0{index + 1}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" aria-labelledby="cta-title">
        <div className="container">
          <div className="cta-card">
            <div className="cta-copy">
              <span className="eyebrow eyebrow--light">Следующий шаг</span>
              <h2 id="cta-title">Посмотреть мой учебный маршрут</h2>
              <p>Три предмета, темы и чек-лист с прогрессом.</p>
            </div>

            <Link
              to="/subjects"
              className="cta-circle"
              aria-label="Перейти к предметам ЕГЭ"
            >
              <ArrowUpRight size={34} />
            </Link>

            <span className="cta-ghost" aria-hidden="true">
              ЕГЭ
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
