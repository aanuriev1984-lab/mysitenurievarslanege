import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { aiCategories, aiTools } from '../data/content.js'
import {
  ArrowRight,
  ArrowUpRight,
  SparkIcon,
} from '../components/Icons.jsx'

export default function AiTools() {
  useEffect(() => {
    document.title =
      'Нейросети — сравнительная таблица | Нуриев Арслан'
  }, [])

  return (
    <>
      <section className="page-hero ai-hero" aria-labelledby="ai-title">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <Link to="/">Обо мне</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Нейросети</span>
          </nav>

          <div className="page-hero-grid">
            <div className="page-hero-copy">
              <p className="eyebrow eyebrow--light">
                <span
                  className="status-dot status-dot--light"
                  aria-hidden="true"
                />
                03 · цифровые инструменты
              </p>
              <h1 id="ai-title">
                Нейросети
                <span>сравнение</span>
              </h1>
              <p className="page-hero-lead">
                Шесть сервисов для текста, изображений, видео, голоса, музыки и
                поиска. В одной таблице — что каждый умеет, сколько стоит и где
                его ограничения.
              </p>

              <div
                className="hero-subject-line"
                aria-label="Категории сервисов"
              >
                {aiCategories.map((category) => (
                  <span
                    key={category.label}
                    className={`tone-${category.tone}`}
                  >
                    <i aria-hidden="true" />
                    {category.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="page-hero-count" aria-hidden="true">
              <span className="count-number">6</span>
              <span className="count-text">
                сервисов
                <br />
                одна таблица
              </span>
              <span className="count-ring" />
            </div>
          </div>
        </div>
      </section>

      <section
        className="section ai-section"
        id="ai-table"
        aria-labelledby="ai-table-title"
      >
        <div className="container">
          <div className="section-head">
            <div className="section-head-main">
              <span className="section-index">01</span>
              <h2 id="ai-table-title">Сравнительная таблица</h2>
            </div>
            <p className="section-head-note">
              Возможности, цена и ограничения — без рекламы
            </p>
          </div>

          <p className="ai-table-hint">
            Прокрутите таблицу вбок, чтобы увидеть все столбцы →
          </p>

          <div
            className="ai-table-wrap"
            role="region"
            aria-labelledby="ai-table-title"
            tabIndex={0}
          >
            <table className="ai-table">
              <caption className="sr-only">
                Сравнение шести нейросетей: ChatGPT, Midjourney, Runway,
                ElevenLabs, Suno и Perplexity — стоимость, возможности,
                преимущества, недостатки и ссылки.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Нейросеть</th>
                  <th scope="col">Платная / бесплатная</th>
                  <th scope="col">С чем работает?</th>
                  <th scope="col">Преимущества</th>
                  <th scope="col">Недостатки</th>
                  <th scope="col">Ссылка</th>
                </tr>
              </thead>
              <tbody>
                {aiTools.map((tool) => (
                  <tr key={tool.id} className={`tone-${tool.tone}`}>
                    <th scope="row" className="ai-name-cell">
                      <span className="ai-index" aria-hidden="true">
                        {tool.number}
                      </span>
                      <span className="ai-name">{tool.name}</span>
                      <span className="ai-company">{tool.company}</span>
                      <span className="ai-category">{tool.category}</span>
                    </th>

                    <td data-label="Платная / бесплатная">
                      <span
                        className={`price-badge price-badge--${tool.pricingType}`}
                      >
                        {tool.pricing}
                      </span>
                      <span className="ai-billing">{tool.billing}</span>
                    </td>

                    <td data-label="С чем работает?">{tool.worksWith}</td>

                    <td data-label="Преимущества">
                      <ul className="ai-list ai-list--pros">
                        {tool.pros.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </td>

                    <td data-label="Недостатки">
                      <ul className="ai-list ai-list--cons">
                        {tool.cons.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </td>

                    <td data-label="Ссылка">
                      <a
                        className="ai-link"
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {tool.label}
                        <ArrowUpRight size={14} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="ai-notes">
            <div className="ai-note">
              <span className="ai-note-icon" aria-hidden="true">
                <SparkIcon size={18} />
              </span>
              <div>
                <strong>Как читать таблицу</strong>
                <p>
                  <b>Freemium</b> — базовый доступ бесплатно, расширенные
                  функции по подписке. <b>Платная</b> — только по подписке.
                </p>
              </div>
            </div>
            <p className="ai-disclaimer">
              Тарифы и лимиты меняются. Перед оплатой проверяйте условия на
              сайте сервиса.
            </p>
          </div>
        </div>
      </section>

      <section className="page-end" aria-labelledby="ai-end-title">
        <div className="container">
          <div className="end-card">
            <div>
              <span className="eyebrow">Главное</span>
              <h2 id="ai-end-title">Сначала задача, потом инструмент</h2>
              <p>
                Нейросеть помогает быстрее сделать черновик, найти источники
                или собрать идеи. Но проверять факты и принимать решения всё
                равно человеку.
              </p>
            </div>
            <Link to="/subjects" className="button button--primary">
              К подготовке к ЕГЭ
              <ArrowRight size={18} />
            </Link>
            <span className="end-name" aria-hidden="true">
              AI
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
