import { CheckIcon, ResetIcon } from './Icons.jsx'

export default function Checklist({
  subject,
  subjectStats,
  checked,
  onToggle,
  onReset,
}) {
  const { done, total, percent } = subjectStats

  return (
    <div className={`checklist-card tone-${subject.tone}`}>
      <div className="checklist-head">
        <div>
          <span className="eyebrow">Чек-лист</span>
          <h3>Мои шаги</h3>
        </div>
        <span className="checklist-count" aria-hidden="true">
          {done}/{total}
        </span>
      </div>

      <div
        className="progress-track"
        role="progressbar"
        aria-label={`Прогресс по предмету «${subject.name}»`}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={done}
      >
        <span style={{ width: `${percent}%` }} />
      </div>

      <p className="checklist-status" aria-live="polite">
        {done === total
          ? 'Все шаги отмечены — отличная работа!'
          : `Отмечено ${done} из ${total}`}
      </p>

      <ul className="checklist-list">
        {subject.checklist.map((task, index) => {
          const id = `${subject.id}-task-${index}`
          const isDone = Boolean(checked[`${subject.id}:${index}`])

          return (
            <li key={task}>
              <label
                className={`checklist-item ${isDone ? 'is-done' : ''}`}
                htmlFor={id}
              >
                <input
                  id={id}
                  type="checkbox"
                  checked={isDone}
                  onChange={() => onToggle(subject.id, index)}
                />
                <span className="checklist-box" aria-hidden="true">
                  <CheckIcon size={14} />
                </span>
                <span className="checklist-text">{task}</span>
              </label>
            </li>
          )
        })}
      </ul>

      <button
        type="button"
        className="checklist-reset"
        onClick={() => onReset(subject.id)}
        disabled={done === 0}
      >
        <ResetIcon size={15} />
        Сбросить отметки
      </button>
    </div>
  )
}
