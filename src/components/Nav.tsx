import { Link, useLocation } from 'react-router-dom'

interface NavLink {
  label: string
  // A router path for built pages, or null for pages that only exist in the
  // design and haven't been implemented yet (rendered as inert `#` links).
  to: string | null
}

const LINKS: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'History', to: '/history' },
  { label: 'Shops', to: '/shops' },
  { label: 'Visit', to: null },
]

export default function Nav() {
  const { pathname } = useLocation()

  return (
    <div className="sticky top-0 z-20 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-10 py-[22px]">
        <Link to="/" className="font-serif text-[19px] uppercase tracking-[0.14em]">
          Star Court
        </Link>
        <div className="flex gap-9 text-[12px] uppercase tracking-[0.11em]">
          {LINKS.map((link) => {
            const current = link.to === pathname
            const className =
              'relative py-0.5 transition-colors hover:text-brass ' +
              (current ? 'text-brass' : 'text-muted')
            return link.to ? (
              <Link key={link.label} to={link.to} className={className}>
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href="#" className={className}>
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
      <div className="mx-10 h-px bg-line" />
    </div>
  )
}
