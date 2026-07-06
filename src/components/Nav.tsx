import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface NavLink {
  label: string
  to: string
}

const LINKS: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'History', to: '/history' },
  { label: 'Shops', to: '/shops' },
  { label: 'Visit', to: '/visit' },
]

type Theme = 'light' | 'dark'

// The inline script in index.html has already set data-theme before paint,
// so we read the current value straight off the document.
function currentTheme(): Theme {
  return document.documentElement.getAttribute('data-theme') === 'dark'
    ? 'dark'
    : 'light'
}

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.5" />
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2.5v2.6M12 18.9v2.6M2.5 12h2.6M18.9 12h2.6M5.2 5.2l1.9 1.9M16.9 16.9l1.9 1.9M18.8 5.2l-1.9 1.9M7.1 16.9l-1.9 1.9" />
      </g>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 7h16M4 12h16M4 17h16" />
      </g>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M6 6l12 12M18 6L6 18" />
      </g>
    </svg>
  )
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(currentTheme)

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // ignore — private mode / storage disabled
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-brass hover:text-brass"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

export default function Nav() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  // Close the mobile menu whenever the route changes (e.g. a link was tapped).
  useEffect(() => setOpen(false), [pathname])

  return (
    <div className="sticky top-0 z-20 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 md:px-10 py-[22px]">
        <Link
          to="/"
          className="whitespace-nowrap font-serif text-[19px] uppercase tracking-[0.14em]"
        >
          Star Court
        </Link>

        {/* Desktop links — hidden on small screens */}
        <div className="flex items-center gap-9 text-[12px] uppercase tracking-[0.11em] max-md:hidden">
          {LINKS.map((link) => {
            const current = link.to === pathname
            const className =
              'relative py-0.5 transition-colors hover:text-brass ' +
              (current ? 'text-brass' : 'text-muted')
            return (
              <Link key={link.label} to={link.to} className={className}>
                {link.label}
              </Link>
            )
          })}
          <ThemeToggle />
        </div>

        {/* Mobile controls — theme toggle + hamburger */}
        <div className="hidden items-center gap-3 max-md:flex">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-brass hover:text-brass"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      {open && (
        <div className="border-t border-line px-5 pb-3 pt-1 md:hidden">
          <div className="flex flex-col text-[13px] uppercase tracking-[0.11em]">
            {LINKS.map((link) => {
              const current = link.to === pathname
              const className =
                'py-3 transition-colors hover:text-brass ' +
                (current ? 'text-brass' : 'text-muted')
              return (
                <Link key={link.label} to={link.to} className={className}>
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}

      <div className="mx-5 md:mx-10 h-px bg-line" />
    </div>
  )
}
