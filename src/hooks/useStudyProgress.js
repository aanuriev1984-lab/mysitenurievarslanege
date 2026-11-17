import { useCallback, useEffect, useMemo, useState } from 'react'
import { subjects } from '../data/content.js'

const STORAGE_KEY = 'arslan-ege-progress-v1'

function readProgress() {
  if (typeof window === 'undefined') return {}

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return {}
    }
    return parsed
  } catch {
    return {}
  }
}

export function useStudyProgress() {
  const [checked, setChecked] = useState(readProgress)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checked))
    } catch {
      // Приватный режим или переполненное хранилище не должны ломать страницу.
    }
  }, [checked])

  const toggle = useCallback((subjectId, index) => {
    const key = `${subjectId}:${index}`
    setChecked((previous) => {
      const next = { ...previous }
      if (next[key]) {
        delete next[key]
      } else {
        next[key] = true
      }
      return next
    })
  }, [])

  const resetSubject = useCallback((subjectId) => {
    setChecked((previous) => {
      const next = { ...previous }
      const prefix = `${subjectId}:`
      Object.keys(next).forEach((key) => {
        if (key.startsWith(prefix)) delete next[key]
      })
      return next
    })
  }, [])

  const resetAll = useCallback(() => {
    setChecked({})
  }, [])

  const stats = useMemo(() => {
    const bySubject = {}
    let done = 0
    let total = 0

    subjects.forEach((subject) => {
      const subjectDone = subject.checklist.reduce(
        (count, _task, index) =>
          count + (checked[`${subject.id}:${index}`] ? 1 : 0),
        0,
      )
      const subjectTotal = subject.checklist.length
      bySubject[subject.id] = {
        done: subjectDone,
        total: subjectTotal,
        percent: subjectTotal
          ? Math.round((subjectDone / subjectTotal) * 100)
          : 0,
      }
      done += subjectDone
      total += subjectTotal
    })

    return {
      bySubject,
      done,
      total,
      percent: total ? Math.round((done / total) * 100) : 0,
    }
  }, [checked])

  return { checked, toggle, resetSubject, resetAll, stats }
}
