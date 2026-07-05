const LINKS = [
  { label: 'Home', href: '#', current: true },
  { label: 'History', href: '#history', current: false },
  { label: 'Shops', href: '#shops', current: false },
  { label: 'Visit', href: '#visit', current: false },
]

export default function Nav() {
  return (
    <div className="sticky top-0 z-20 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-10 py-[22px]">
        <a
          href="#"
          className="font-serif text-[19px] uppercase tracking-[0.14em]"
        >
          Star Court
        </a>
        <div className="flex gap-9 text-[12px] uppercase tracking-[0.11em]">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                'relative py-0.5 transition-colors hover:text-brass ' +
                (link.current ? 'text-brass' : 'text-muted')
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-10 h-px bg-line" />
    </div>
  )
}
