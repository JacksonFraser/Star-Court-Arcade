import { Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder.tsx'

interface Fact {
  value: string
  label: string
}

interface TimelinePoint {
  year: string
  text: string
}

interface ShopTease {
  photo: string
  title: string
  blurb: string
}

const FACTS: Fact[] = [
  { value: '1921', label: 'Opened its doors' },
  { value: '100+', label: 'Years on Molesworth St' },
  { value: '20+', label: 'Shops & eateries' },
  { value: '1963', label: 'Became an arcade' },
]

const TIMELINE: TimelinePoint[] = [
  { year: '1921', text: 'Opens 18 July for T. J. Dorgan.' },
  { year: '1930s', text: 'Sound arrives on an RCA Photophone.' },
  { year: '1963', text: 'Stalls become an arcade of shops.' },
  { year: '2022', text: 'Flood restoration reveals her Deco bones.' },
]

const SHOPS: ShopTease[] = [
  {
    photo: 'PHOTO — vintage & curiosity shop',
    title: 'Curiosity & gifts',
    blurb: 'Vintage finds, homewares, treasures',
  },
  {
    photo: 'PHOTO — café tables in the arcade',
    title: 'Cafés & eateries',
    blurb: 'Coffee, Thai, sweet things',
  },
  {
    photo: 'PHOTO — the theatre upstairs',
    title: 'The theatre upstairs',
    blurb: 'Art-house film & live shows',
  },
]

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <div className="mx-auto max-w-[1180px] px-10 pb-[58px] pt-20 text-center">
        <div className="mb-[30px] text-[12px] uppercase tracking-[0.34em] text-brass">
          Lismore, New South Wales · Since 1921
        </div>
        <h1 className="mx-auto max-w-[900px] font-serif text-[66px] font-normal leading-[1.05] tracking-[0.005em] max-md:text-[44px]">
          A grand old lady, still keeping shop.
        </h1>
        <p className="mx-auto mt-[34px] max-w-[600px] text-[16.5px] leading-[1.8] text-body">
          For more than a century, the Star Court Arcade has drawn Lismore off
          the street and into a world of curiosity shops, cafés and the hidden
          theatre upstairs. This is her story — and her open door today.
        </p>
        <div className="mt-10 flex justify-center gap-[14px] max-sm:flex-col max-sm:items-center">
          <Link
            to="/history"
            className="rounded-[2px] bg-ink px-[30px] py-[15px] text-[12px] uppercase tracking-[0.09em] text-cream transition-colors hover:bg-brass"
          >
            Explore the history
          </Link>
          <Link
            to="/shops"
            className="rounded-[2px] border border-line-brass px-[30px] py-[15px] text-[12px] uppercase tracking-[0.09em] text-ink transition-colors hover:border-brass hover:text-brass"
          >
            Today's shops
          </Link>
        </div>
      </div>

      {/* ===== HERO IMAGE ===== */}
      <div className="mx-auto max-w-[1180px] px-10 pb-[66px]">
        <Placeholder className="h-[440px] rounded-[3px]">
          PHOTO — arcade breezeway, leadlight &amp; pressed-metal ceiling,
          present day
        </Placeholder>
      </div>

      {/* ===== FACT ROW ===== */}
      <div className="border-y border-line">
        <div className="mx-auto grid max-w-[1180px] grid-cols-4 max-md:grid-cols-2">
          {FACTS.map((fact, i) => (
            <div
              key={fact.value}
              className={
                'px-[34px] py-10 ' +
                (i < FACTS.length - 1 ? 'border-r border-line ' : '') +
                (i % 2 === 0 ? 'max-md:border-r ' : 'max-md:border-r-0 ') +
                (i < 2 ? 'max-md:border-b max-md:border-line' : '')
              }
            >
              <div className="font-serif text-[42px] text-brass">
                {fact.value}
              </div>
              <div className="mt-[10px] text-[12.5px] uppercase tracking-[0.06em] text-muted">
                {fact.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== STORY INTRO ===== */}
      <div className="mx-auto grid max-w-[1180px] grid-cols-2 items-center gap-[60px] px-10 py-[76px] max-md:grid-cols-1">
        <Placeholder className="h-[380px] rounded-[3px]">
          ARCHIVAL — Star Court picture theatre, mid-century
        </Placeholder>
        <div>
          <div className="mb-[22px] text-[12px] uppercase tracking-[0.26em] text-brass">
            The story so far
          </div>
          <h2 className="mb-[22px] font-serif text-[38px] font-normal leading-[1.18]">
            From picture palace to living arcade.
          </h2>
          <p className="mb-4 text-[16px] leading-[1.8] text-body-2">
            Opening with great fanfare on 18 July 1921, the Star Court began
            life as one of the North Coast's first purpose-built picture
            theatres. The arrival of sound brought new seats and drapes; in 1963
            the stalls were sealed and an arcade of shops built into the room
            below the screen.
          </p>
          <p className="mb-[26px] text-[16px] leading-[1.8] text-body-2">
            Nearly lost more than once, she was saved in 1996 — and after the
            flood of 2022, her original Art&nbsp;Deco detailing was uncovered
            once more.
          </p>
          <Link
            to="/history"
            className="border-b border-line-brass pb-1 text-[13px] uppercase tracking-[0.1em] text-brass transition-colors hover:text-brass"
          >
            Read the decade-by-decade history →
          </Link>
        </div>
      </div>

      {/* ===== TIMELINE TEASER ===== */}
      <div className="border-y border-line bg-cream-soft">
        <div className="mx-auto max-w-[1180px] px-10 py-16">
          <div className="mb-[30px] font-serif text-[13px] uppercase tracking-[0.26em] text-brass">
            A few turning points
          </div>
          <div className="grid grid-cols-4 max-md:grid-cols-2 max-md:gap-8">
            {TIMELINE.map((item, i) => (
              <div
                key={item.year}
                className={
                  (i === 0
                    ? 'pr-[30px]'
                    : i === TIMELINE.length - 1
                      ? 'pl-[30px] max-md:pl-0'
                      : 'px-[30px]') +
                  (i < TIMELINE.length - 1
                    ? ' border-r border-line-soft max-md:border-r-0'
                    : '')
                }
              >
                <div className="font-serif text-[26px]">{item.year}</div>
                <div className="mt-3 text-[14.5px] leading-[1.6] text-body-2">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== SHOPS TEASER ===== */}
      <div className="mx-auto max-w-[1180px] px-10 py-[76px]">
        <div className="mb-[34px] flex items-baseline justify-between">
          <h2 className="m-0 font-serif text-[34px] font-normal">
            In the arcade today
          </h2>
          <Link
            to="/shops"
            className="text-[12px] uppercase tracking-[0.1em] text-brass transition-colors hover:text-brass"
          >
            Full directory →
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-7 max-md:grid-cols-1">
          {SHOPS.map((shop) => (
            <Link key={shop.title} to="/shops" className="group block">
              <Placeholder className="h-[220px] rounded-[3px] transition-[filter] duration-[250ms] group-hover:brightness-[1.04] group-hover:saturate-[1.05]">
                {shop.photo}
              </Placeholder>
              <div className="mt-4 font-serif text-[20px]">{shop.title}</div>
              <div className="mt-1 text-[13.5px] text-muted-2">{shop.blurb}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* ===== VISIT CTA ===== */}
      <div className="bg-cta text-cta-body">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-[34px] px-10 py-16">
          <div>
            <div className="mb-4 text-[12px] uppercase tracking-[0.28em] text-brass-bright">
              Come and visit
            </div>
            <div className="font-serif text-[34px] text-cta-heading">
              126 Molesworth Street, Lismore
            </div>
            <div className="mt-3 text-[14.5px] text-cta-muted">
              Open Mon–Fri 9–5 · Sat 9–1 · Sunday closed
            </div>
          </div>
          <Link
            to="/visit"
            className="rounded-[2px] border border-cta-line px-[30px] py-[15px] text-[12px] uppercase tracking-[0.09em] text-cta-body transition-colors hover:border-brass hover:text-brass"
          >
            Plan your visit
          </Link>
        </div>
      </div>
    </>
  )
}
