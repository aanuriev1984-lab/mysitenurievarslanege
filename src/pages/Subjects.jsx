import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Checklist from '../components/Checklist.jsx'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ResetIcon,
  SubjectIcon,
} from '../components/Icons.jsx'
import { profile, subjects, weeklyPlan } from '../data/content.js'
import { useStudyProgress } from '../hooks/useStudyProgress.js'

export default function Subjects() {
  const { checked, toggle, resetSubject, resetAll, stats } =
    useStudyProgress()

  useEffect(() => {
    document.title =
      'Мои предметы ЕГЭ — Нуриев Арслан | История, английский, общество'
  }, [])

  const handleResetAll = () => {
    if (stats.done === 0) return
    const shouldReset = window.confirm(
      'Сбросить все отметки в чек-листах? Это действие нельзя отменить.',
    )
    if (shouldReset) resetAll()
  }

  return (
    <>
      <section className="page-hero" aria-labelledby="subjects-title">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <Link to="/">Обо мне</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Предметы ЕГЭ</span>
          </nav>

          <div className="page-hero-grid">
            <div className="page-hero-copy">
              <p className="eyebrow eyebrow--light">
                <span className="status-dot status-dot--light" aria-hidden="true" />
                02 · мой выбор
              </p>
              <h1 id="subjects-title">
                Мои предметы
                <span>ЕГЭ</span>
              </h1>
              <p className="page-hero-lead">
                Три предмета, которые дополняют друг друга: история помогает
                понять прошлое, обществознание — настоящее, а английский
                открывает дверь к остальному миру. Здесь — мой маршрут и честный
                прогресс.
              </p>

              <div className="hero-subject-line" aria-label="Выбранные предметы">
                {subjects.map((subject) => (
                  <span key={subject.id} className={`tone-${subject.tone}`}>
                    <i aria-hidden="true" />
                    {subject.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="page-hero-count" aria-hidden="true">
              <span className="count-number">3</span>
              <span className="count-text">
                предмета
                <br />
                один маршрут
              </span>
              <span className="count-ring" />
            </div>
          </div>
        </div>
      </section>

      <section
        className="progress-section"
        id="checklist"
        aria-labelledby="progress-title"
      >
        <div className="container">
          <div className="progress-panel">
            <div className="progress-copy">
              <span className="eyebrow">Мой прогресс</span>
              <h2 id="progress-title">Подготовка по шагам</h2>
              <p>
                Отмечай пункты в чек-листах ниже. Прогресс сохраняется в этом
                браузере, поэтому к нему можно вернуться в любой момент.
              </p>
              <button
                type="button"
                className="reset-all"
                onClick={handleResetAll}
                disabled={stats.done === 0}
              >
                <ResetIcon size={15} />
                Сбросить весь прогресс
              </button>
            </div>

            <div className="progress-meter">
              <div className="progress-meter-top">
                <span>Общая готовность</span>
                <strong aria-live="polite">{stats.percent}%</strong>
              </div>
              <div
                className="progress-track progress-track--large"
                role="progressbar"
                aria-label="Общий прогресс подготовки"
                aria-valuemin={0}
                aria-valuemax={stats.total}
                aria-valuenow={stats.done}
              >
                <span style={{ width: `${stats.percent}%` }} />
              </div>
              <span className="progress-caption" aria-live="polite">
                {stats.done} из {stats.total} шагов отмечено
              </span>
            </div>
          </div>

          <div className="summary-grid">
            {subjects.map((subject) => {
              const subjectStats = stats.bySubject[subject.id]

              return (
                <Link
                  key={subject.id}
                  to={`/subjects#${subject.id}`}
                  className={`summary-card tone-${subject.tone}`}
                >
                  <div className="summary-top">
                    <span className="summary-number">{subject.number}</span>
                    <span className="summary-icon">
                      <SubjectIcon name={subject.icon} size={23} />
                    </span>
                  </div>

                  <div className="summary-body">
                    <span className="summary-exam">{subject.exam}</span>
                    <h2>{subject.name}</h2>
                    <p>{subject.tagline}</p>
                  </div>

                  <div className="summary-progress">
                    <div className="summary-progress-top">
                      <span>Шаги</span>
                      <strong>
                        {subjectStats.done}/{subjectStats.total}
                      </strong>
                    </div>
                    <div
                      className="progress-track"
                      role="progressbar"
                      aria-label={`Прогресс по предмету «${subject.name}»`}
                      aria-valuemin={0}
                      aria-valuemax={subjectStats.total}
                      aria-valuenow={subjectStats.done}
                    >
                      <span style={{ width: `${subjectStats.percent}%` }} />
                    </div>
                  </div>

                  <span className="summary-link">
                    К предмету
                    <ArrowDown size={16} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {subjects.map((subject) => {
        const subjectStats = stats.bySubject[subject.id]

        return (
          <section
            key={subject.id}
            id={subject.id}
            className={`subject-section tone-${subject.tone}`}
            aria-labelledby={`${subject.id}-title`}
          >
            <div className="container">
              <div className="subject-head">
                <div className="subject-head-left">
                  <span className="subject-number" aria-hidden="true">
                    {subject.number}
                  </span>
                  <span className="subject-icon">
                    <SubjectIcon name={subject.icon} size={27} />
                  </span>
                  <div className="subject-title">
                    <span className="subject-exam">{subject.exam}</span>
                    <h2 id={`${subject.id}-title`}>{subject.name}</h2>
                    <p>{subject.tagline}</p>
                  </div>
                </div>

                <div className="target-badge">
                  <span>Моя цель</span>
                  <strong>{subject.target}</strong>
                </div>
              </div>

              <div className="subject-body">
                <div className="subject-main">
                  <p className="subject-description">{subject.description}</p>

                  <div className="subject-block">
                    <h3>Формат экзамена</h3>
                    <div className="chip-row">
                      {subject.format.map((item) => (
                        <span className="chip" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="subject-columns">
                    <div className="subject-block">
                      <h3>Что в программе</h3>
                      <ul className="topic-list">
                        {subject.topics.map((topic) => (
                          <li key={topic}>{topic}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="subject-block">
                      <h3>Мой фокус</h3>
                      <ul className="focus-list">
                        {subject.focus.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="subject-block">
                    <h3>Полезные ресурсы</h3>
                    <div className="resource-row">
                      {subject.resources.map((resource) => (
                        <a
                          key={resource.label}
                          href={resource.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {resource.label}
                          <ArrowUpRight size={15} />
                        </a>
                      ))}
                    </div>
                  </div>

                  <blockquote className="subject-quote">
                    «{subject.quote}»
                  </blockquote>
                </div>

                <aside
                  className="subject-aside"
                  aria-label={`Чек-лист по предмету «${subject.name}»`}
                >
                  <Checklist
                    subject={subject}
                    subjectStats={subjectStats}
                    checked={checked}
                    onToggle={toggle}
                    onReset={resetSubject}
                  />
                </aside>
              </div>
            </div>
          </section>
        )
      })}

      <section
        className="section weekly-section"
        aria-labelledby="weekly-title"
      >
        <div className="container">
          <div className="section-head">
            <div className="section-head-main">
              <span className="section-index">Мой ритм</span>
              <h2 id="weekly-title">Неделя подготовки</h2>
            </div>
            <p className="section-head-note">
              Ориентир, а не жёсткий график
            </p>
          </div>

          <div className="weekly-grid">
            {weeklyPlan.map((day) => (
              <article className={`week-card tone-${day.tone}`} key={day.day}>
                <span className="week-day">{day.day}</span>
                <span className="week-dot" aria-hidden="true" />
                <strong>{day.subject}</strong>
                <span className="week-focus">{day.focus}</span>
              </article>
            ))}
          </div>

          <p className="weekly-note">
            Важнее регулярность, чем идеально заполненный календарь. Если
            что-то сдвинулось — просто возвращаюсь к плану на следующий день.
          </p>
        </div>
      </section>

      <section className="page-end" aria-labelledby="page-end-title">
        <div className="container">
          <div className="end-card">
            <div>
              <span className="eyebrow">Главное</span>
              <h2 id="page-end-title">Не идеальный план, а регулярные шаги</h2>
              <p>
                Этот сайт — напоминание, что подготовка складывается из
                маленьких действий. А ещё — место, где видно, сколько уже
                сделано.
              </p>
            </div>
            <Link to="/" className="button button--primary">
              Вернуться обо мне
              <ArrowRight size={18} />
            </Link>
            <span className="end-name" aria-hidden="true">
              {profile.firstName}
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
