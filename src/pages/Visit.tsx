import { Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder.tsx'

interface Hours {
  day: string
  time: string
  closed?: boolean
}

interface GettingHere {
  title: string
  body: string
}

const HOURS: Hours[] = [
  { day: 'Monday – Friday', time: '9:00 – 5:00' },
  { day: 'Saturday', time: '9:00 – 1:00' },
  { day: 'Sunday', time: 'Closed', closed: true },
]

const GETTING_HERE: GettingHere[] = [
  {
    title: 'Parking',
    body: 'Free timed street parking runs along Molesworth and Keen Streets, with council car parks a short walk away off Magellan and Carrington Streets.',
  },
  {
    title: 'On foot',
    body: 'The arcade sits mid-block in the CBD, an easy walk from the Lismore Quadrangle, the regional gallery and the riverside. Enter from either street.',
  },
  {
    title: 'Access',
    body: 'The ground-floor arcade is step-free between streets. The theatre is upstairs — contact the box office ahead for access arrangements.',
  },
]

// Small uppercase brass label used above each info block.
function InfoLabel({ children }: { children: string }) {
  return (
    <div className="text-[11.5px] uppercase tracking-[0.14em] text-brass">
      {children}
    </div>
  )
}

export default function Visit() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <div className="mx-auto max-w-[900px] px-10 pb-5 pt-[78px] text-center">
        <div className="mb-[26px] text-[12px] uppercase tracking-[0.34em] text-brass">
          Plan your visit
        </div>
        <h1 className="m-0 font-serif text-[56px] font-normal leading-[1.08] max-md:text-[40px]">
          Come and find us
        </h1>
        <p className="mx-auto mt-[28px] max-w-[600px] text-[16.5px] leading-[1.8] text-body">
          The Star Court runs between Molesworth and Keen Streets in the heart
          of Lismore's CBD. Step in off the street any day of the week.
        </p>
      </div>

      {/* ===== MAP + INFO ===== */}
      <div className="mx-auto grid max-w-[1180px] grid-cols-[1.3fr_1fr] items-stretch gap-11 px-10 py-10 max-md:grid-cols-1">
        <Placeholder className="min-h-[420px] rounded max-md:min-h-[300px]">
          MAP — Molesworth Street, Lismore CBD
        </Placeholder>
        <div className="flex flex-col">
          <div className="border-b border-line pb-6">
            <InfoLabel>Address</InfoLabel>
            <div className="mt-3 font-serif text-[22px] leading-[1.35]">
              126 Molesworth Street
              <br />
              Lismore NSW 2480
            </div>
            <div className="mt-2 text-[13.5px] text-muted-2">
              Walk-through to Keen Street
            </div>
          </div>

          <div className="border-b border-line py-6">
            <InfoLabel>Opening hours</InfoLabel>
            <div className="mt-[14px] flex flex-col gap-[9px] text-[15px]">
              {HOURS.map((row) => (
                <div key={row.day} className="flex justify-between">
                  <span className="text-body-2">{row.day}</span>
                  <span
                    className={
                      'font-serif ' + (row.closed ? 'text-[#a89073]' : 'text-ink')
                    }
                  >
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 text-[12.5px] italic text-[#8a7f6b]">
              Individual shops, cafés and the theatre keep their own hours.
            </div>
          </div>

          <div className="py-6">
            <InfoLabel>Contact</InfoLabel>
            <div className="mt-3 text-[15px] leading-[1.9] text-body-2">
              Lismore, NSW
              <br />
              Enquiries via the arcade office
            </div>
          </div>
        </div>
      </div>

      {/* ===== GETTING HERE ===== */}
      <div className="border-y border-line bg-cream-soft">
        <div className="mx-auto max-w-[1180px] px-10 py-16">
          <div className="mb-[34px] font-serif text-[13px] uppercase tracking-[0.26em] text-brass">
            Getting here
          </div>
          <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1 max-md:gap-8">
            {GETTING_HERE.map((item) => (
              <div key={item.title}>
                <div className="mb-3 font-serif text-[22px]">{item.title}</div>
                <p className="m-0 text-[14.5px] leading-[1.75] text-body-2">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="mx-auto max-w-[900px] px-10 py-[70px] text-center">
        <h2 className="mb-4 mt-0 font-serif text-[34px] font-normal">
          A hundred years in, still worth the detour.
        </h2>
        <p className="mx-auto mb-[30px] max-w-[560px] text-[16px] leading-[1.8] text-body">
          Come for the coffee, stay for the leadlight and the pressed-metal
          ceilings. The Star Court is best discovered slowly.
        </p>
        <div className="flex justify-center gap-[14px] max-sm:flex-col max-sm:items-center">
          <Link
            to="/shops"
            className="rounded-[2px] bg-ink px-[30px] py-[15px] text-[12px] uppercase tracking-[0.09em] text-cream transition-colors hover:bg-brass"
          >
            See the shops
          </Link>
          <Link
            to="/history"
            className="rounded-[2px] border border-line-brass px-[30px] py-[15px] text-[12px] uppercase tracking-[0.09em] text-ink transition-colors hover:border-brass hover:text-brass"
          >
            Read the history
          </Link>
        </div>
      </div>
    </>
  )
}
