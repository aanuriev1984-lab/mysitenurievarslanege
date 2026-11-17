const baseProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
}

function Svg({ size = 20, children, className, viewBox = '0 0 24 24' }) {
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      viewBox={viewBox}
      className={className}
    >
      {children}
    </svg>
  )
}

export function ArrowRight({ size = 18, className }) {
  return (
    <Svg size={size} className={className}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </Svg>
  )
}

export function ArrowUpRight({ size = 18, className }) {
  return (
    <Svg size={size} className={className}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </Svg>
  )
}

export function ArrowDown({ size = 18, className }) {
  return (
    <Svg size={size} className={className}>
      <path d="M12 5v14" />
      <path d="m6 13 6 6 6-6" />
    </Svg>
  )
}

export function CheckIcon({ size = 16, className }) {
  return (
    <Svg size={size} className={className}>
      <path d="m5 12 4 4L19 6" />
    </Svg>
  )
}

export function MenuIcon({ size = 24, className }) {
  return (
    <Svg size={size} className={className}>
      <path d="M4 8h16" />
      <path d="M4 16h16" />
    </Svg>
  )
}

export function CloseIcon({ size = 24, className }) {
  return (
    <Svg size={size} className={className}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </Svg>
  )
}

export function ResetIcon({ size = 16, className }) {
  return (
    <Svg size={size} className={className}>
      <path d="M4 10a8 8 0 1 1 2.3 7.4" />
      <path d="M4 4v6h6" />
    </Svg>
  )
}

export function HistoryIcon({ size = 28, className }) {
  return (
    <Svg size={size} className={className}>
      <path d="M3 10 12 4l9 6" />
      <path d="M5 10v10" />
      <path d="M9.5 10v10" />
      <path d="M14.5 10v10" />
      <path d="M19 10v10" />
      <path d="M3 21h18" />
    </Svg>
  )
}

export function EnglishIcon({ size = 28, className }) {
  return (
    <Svg size={size} className={className}>
      <circle cx="12" cy="12" r="8.7" />
      <path d="M3.5 12h17" />
      <path d="M12 3.3c2.3 2.4 3.6 5.4 3.6 8.7S14.3 18.3 12 20.7C9.7 18.3 8.4 15.3 8.4 12S9.7 5.7 12 3.3Z" />
    </Svg>
  )
}

export function SocietyIcon({ size = 28, className }) {
  return (
    <Svg size={size} className={className}>
      <path d="M12 4v16" />
      <path d="M5 7h14" />
      <path d="M5 7 2.5 13h5L5 7Z" />
      <path d="M19 7l-2.5 6h5L19 7Z" />
      <path d="M8 20h8" />
    </Svg>
  )
}

export function TargetIcon({ size = 24, className }) {
  return (
    <Svg size={size} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </Svg>
  )
}

export function SparkIcon({ size = 14, className }) {
  return (
    <Svg size={size} className={className}>
      <path d="M12 2c.6 5.4 4.6 9.4 10 10-5.4.6-9.4 4.6-10 10-.6-5.4-4.6-9.4-10-10 5.4-.6 9.4-4.6 10-10Z" />
    </Svg>
  )
}

const subjectIcons = {
  history: HistoryIcon,
  english: EnglishIcon,
  society: SocietyIcon,
}

export function SubjectIcon({ name, ...props }) {
  const Icon = subjectIcons[name] ?? HistoryIcon
  return <Icon {...props} />
}
