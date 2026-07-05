import { Link } from 'react-router-dom'

interface FooterLink {
  label: string
  to: string | null
}

const LINKS: FooterLink[] = [
  { label: 'Home', to: '/' },
  { label: 'History', to: '/history' },
  { label: 'Shops', to: '/shops' },
  { label: 'Visit', to: null },
]

export default function Footer() {
  return (
    <div className="bg-footer text-footer-text">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-5 p-10">
        <div className="font-serif text-[15px] uppercase tracking-[0.14em] text-brass-bright">
          Star Court Arcade
        </div>
        <div className="flex gap-7 text-[12px] uppercase tracking-[0.08em]">
          {LINKS.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className="transition-colors hover:text-brass"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href="#"
                className="transition-colors hover:text-brass"
              >
                {link.label}
              </a>
            ),
          )}
        </div>
        <div className="text-[12px] text-footer-dim">
          Lismore, NSW · A Northern Rivers landmark
        </div>
      </div>
    </div>
  )
}
