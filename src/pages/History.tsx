import type { ReactNode } from 'react'
import Placeholder from '../components/Placeholder.tsx'

interface Decade {
  era: ReactNode
  tag: string
  heading: string
  body: ReactNode
  photo?: string
}

// Emphasised runs in the source use font-weight 600.
function B({ children }: { children: ReactNode }) {
  return <strong className="font-semibold">{children}</strong>
}

const DECADES: Decade[] = [
  {
    era: '1920s',
    tag: 'A theatre opens',
    heading: "One of the North Coast's first picture theatres",
    body: (
      <>
        Built for T. J. Dorgan, the Star Court opened with great fanfare on{' '}
        <B>18 July 1921</B>. Its handsome twenties brick façade rose over
        Molesworth Street, and Lismore poured in to see the pictures in one of
        the region's first purpose-built cinemas.
      </>
    ),
    photo: 'ARCHIVAL — opening season, 1921 · programme & auditorium',
  },
  {
    era: '1930s',
    tag: 'The talkies',
    heading: 'Sound comes to the Star Court',
    body: (
      <>
        The arrival of sound cinema reshaped the theatre: an RCA Photophone
        system, fresh seating and new drapes brought the auditorium up to date
        for the talkies. Through the Depression years, a night at the pictures
        remained one of Lismore's great affordable pleasures.
      </>
    ),
  },
  {
    era: (
      <>
        1940s<br />–50s
      </>
    ),
    tag: 'Golden age',
    heading: 'The picture-going years',
    body: (
      <>
        Through the war and the post-war boom, the Star Court was part of the
        weekly rhythm of the town — Saturday matinees, newsreels and the big
        features. Cinema was at its height, and the theatre was one of the
        busiest rooms in Lismore.
      </>
    ),
    photo: 'ARCHIVAL — queues on Molesworth Street, mid-century',
  },
  {
    era: '1960s',
    tag: 'The arcade is born',
    heading: 'Shops move in beneath the screen',
    body: (
      <>
        As television drew audiences home, the building found a second life. In{' '}
        <B>1963</B> the stalls were sealed off and an arcade of shops was built
        into the room below the screen — creating the walk-through of shopfronts
        that Lismore still wanders today. The picture theatre carried on above.
      </>
    ),
  },
  {
    era: (
      <>
        1970s<br />–80s
      </>
    ),
    tag: 'Arcade life',
    heading: 'A fixture of the shopping town',
    body: (
      <>
        Two generations of Lismore shopkeepers came and went through the arcade
        — booksellers, hairdressers, record shops and cafés. The Star Court
        settled into its role as a beloved, slightly old-fashioned shortcut
        between streets, its Deco detailing quietly weathering beneath later
        fit-outs.
      </>
    ),
  },
  {
    era: '1990s',
    tag: 'Saved',
    heading: 'Rescued from the wrecking ball',
    body: (
      <>
        By the 1990s the ageing building was under real threat. A community that
        had grown up with the Star Court rallied to save it, and in <B>1996</B>{' '}
        the arcade was secured for a new era — its heritage recognised rather
        than erased.
      </>
    ),
    photo: 'ARCHIVAL — the arcade interior before restoration',
  },
  {
    era: (
      <>
        2000s<br />–10s
      </>
    ),
    tag: 'A living landmark',
    heading: 'Independent film returns upstairs',
    body: (
      <>
        The old auditorium found new purpose as a home for art-house cinema and
        live events, while the arcade below filled with independent traders. The
        Star Court became a byword for the creative, independent spirit of the
        Northern Rivers.
      </>
    ),
  },
  {
    era: '2020s',
    tag: 'Century & flood',
    heading: 'One hundred years — and a great flood',
    body: (
      <>
        The Star Court marked its <B>centenary in 2021</B>. Months later, the
        catastrophic <B>2022 Lismore flood</B> inundated Molesworth Street. In
        the long restoration that followed, original Art&nbsp;Deco detailing
        hidden for decades was uncovered — and the grand old lady reopened her
        doors, quietly beautiful once more.
      </>
    ),
    photo: 'PHOTO — restored arcade & uncovered Deco detail, 2020s',
  },
]

const GALLERY: string[] = [
  'ARCHIVAL — façade & vertical sign',
  'ARCHIVAL — auditorium interior',
  'ARCHIVAL — arcade shopfronts',
  'PHOTO — leadlight detail',
  'PHOTO — pressed-metal ceiling',
  'PHOTO — the arcade today',
]

export default function History() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <div className="mx-auto max-w-[900px] px-10 pb-[30px] pt-[78px] text-center">
        <div className="mb-[26px] text-[12px] uppercase tracking-[0.34em] text-brass">
          A century on Molesworth Street
        </div>
        <h1 className="m-0 font-serif text-[56px] font-normal leading-[1.08] max-md:text-[40px]">
          Decade by decade
        </h1>
        <p className="mx-auto mt-[28px] max-w-[600px] text-[16.5px] leading-[1.8] text-body">
          The Star Court has been a picture palace, a shopping arcade, a
          survivor of near-demolition and flood, and — through all of it — a
          fixed point in the life of Lismore. Here is her story, ten years at a
          time.
        </p>
      </div>

      {/* ===== HERO IMAGE ===== */}
      <div className="mx-auto max-w-[1180px] px-10 pb-5 pt-[26px]">
        <Placeholder className="h-[400px] rounded-[3px]">
          ARCHIVAL — Star Court façade &amp; Molesworth Street, early years
        </Placeholder>
      </div>

      {/* ===== TIMELINE ===== */}
      <div className="mx-auto max-w-[1000px] px-10 pb-5 pt-10">
        {DECADES.map((decade, i) => (
          <div
            key={i}
            className={
              'grid grid-cols-[150px_1fr] gap-10 border-t border-line py-11 ' +
              'max-md:grid-cols-1 max-md:gap-4 max-md:py-9 ' +
              (i === DECADES.length - 1 ? 'border-b' : '')
            }
          >
            <div>
              <div className="font-serif text-[34px] leading-none text-brass">
                {decade.era}
              </div>
              <div className="mt-2 text-[12px] uppercase tracking-[0.08em] text-[#8a7f6b]">
                {decade.tag}
              </div>
            </div>
            <div>
              <h3 className="mb-[14px] font-serif text-[23px] font-normal leading-[1.3]">
                {decade.heading}
              </h3>
              <p className="m-0 text-[15.5px] leading-[1.8] text-body-2">
                {decade.body}
              </p>
              {decade.photo && (
                <Placeholder className="mt-[18px] h-[230px] rounded-[3px]">
                  {decade.photo}
                </Placeholder>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ===== GALLERY ===== */}
      <div className="mt-5 border-t border-line bg-cream-soft">
        <div className="mx-auto max-w-[1180px] px-10 py-[70px]">
          <div className="mb-[30px] text-center font-serif text-[13px] uppercase tracking-[0.26em] text-brass">
            From the album
          </div>
          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
            {GALLERY.map((caption, i) => (
              <div key={i} className="group">
                <Placeholder className="h-[250px] rounded-[3px] transition-[filter] duration-[250ms] group-hover:brightness-[1.04] group-hover:saturate-[1.05]">
                  {caption}
                </Placeholder>
              </div>
            ))}
          </div>
          <div className="mt-[26px] text-center text-[13px] italic text-[#8a7f6b]">
            Have a photo or a memory of the Star Court? We'd love to add it to
            the album.
          </div>
        </div>
      </div>

      {/* ===== NEXT ===== */}
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-5 px-10 py-[60px]">
        <div>
          <div className="mb-2 text-[12px] uppercase tracking-[0.1em] text-[#8a7f6b]">
            Next
          </div>
          <div className="font-serif text-[28px]">
            See who's in the arcade today
          </div>
        </div>
        <a
          href="#"
          className="border-b border-line-brass pb-1 text-[13px] uppercase tracking-[0.1em] text-brass transition-colors hover:text-brass"
        >
          The shop directory →
        </a>
      </div>
    </>
  )
}
