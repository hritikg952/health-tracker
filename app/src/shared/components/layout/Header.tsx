import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header
      style={{ backgroundColor: 'var(--color-surface-container-low)' }}
      className="sticky top-0 z-50 px-4 py-3 backdrop-blur-xl flex items-center justify-between"
    >
      <Link
        to="/"
        style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-headline)' }}
        className="text-xl font-semibold"
      >
        Teal Care
      </Link>
      <span
        style={{ color: 'var(--color-on-surface-variant)' }}
        className="text-sm"
      >
        Family Health
      </span>
    </header>
  )
}
