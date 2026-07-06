import Placeholder from '../components/Placeholder.tsx'

interface Shop {
  photo: string
  name: string
  blurb: string
}

interface Category {
  href: string
  label: string
}

const CATEGORIES: Category[] = [
  { href: '#retail', label: 'Shops & retail' },
  { href: '#eat', label: 'Cafés & eateries' },
  { href: '#theatre', label: 'The theatre' },
]

const RETAIL: Shop[] = [
  {
    photo: 'PHOTO — shopfront',
    name: 'Curiosity & Co.',
    blurb: 'Vintage, homewares and one-of-a-kind finds.',
  },
  {
    photo: 'PHOTO — shopfront',
    name: 'Molesworth Books',
    blurb: 'Second-hand & new titles, local authors.',
  },
  {
    photo: 'PHOTO — shopfront',
    name: 'The Jewel Box',
    blurb: 'Handmade jewellery & gifts.',
  },
  {
    photo: 'PHOTO — shopfront',
    name: 'Thread & Weft',
    blurb: 'Fabric, yarn and haberdashery.',
  },
  {
    photo: 'PHOTO — shopfront',
    name: 'Fern & Frond',
    blurb: 'Plants, pots and botanical gifts.',
  },
  {
    photo: 'PHOTO — shopfront',
    name: 'Deco Barbers',
    blurb: 'Cuts, shaves and a bit of a yarn.',
  },
]

const EAT: Shop[] = [
  {
    photo: 'PHOTO — café tables',
    name: 'Corner Café',
    blurb: 'Specialty coffee, all-day breakfast.',
  },
  {
    photo: 'PHOTO — kitchen',
    name: 'Bua Thai Kitchen',
    blurb: 'Lunch & dinner, dine-in or takeaway.',
  },
  {
    photo: 'PHOTO — counter',
    name: 'Sweet Molesworth',
    blurb: 'Cakes, pastries and slow afternoons.',
  },
]

function ShopCard({ shop }: { shop: Shop }) {
  return (
    <div className="group overflow-hidden rounded border border-line bg-card transition-[box-shadow,transform] duration-200 hover:-translate-y-[3px] hover:shadow-[0_12px_30px_rgba(120,95,45,0.13)]">
      <Placeholder className="h-[200px] transition-[filter] duration-[250ms] group-hover:brightness-[1.04] group-hover:saturate-[1.05]">
        {shop.photo}
      </Placeholder>
      <div className="p-5">
        <div className="font-serif text-[20px]">{shop.name}</div>
        <div className="mt-[5px] text-[13.5px] leading-[1.5] text-muted-2">
          {shop.blurb}
        </div>
      </div>
    </div>
  )
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-7 flex items-baseline gap-4">
      <h2 className="m-0 font-serif text-[32px] font-normal">{title}</h2>
      <div className="h-px flex-1 bg-line" />
      <span className="text-[12px] uppercase tracking-[0.1em] text-note">
        Placeholder tenants
      </span>
    </div>
  )
}

export default function Shops() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <div className="mx-auto max-w-[900px] px-5 md:px-10 pb-5 pt-[78px] text-center">
        <div className="mb-[26px] text-[12px] uppercase tracking-[0.34em] text-brass">
          Retail · Cafés &amp; eateries · The theatre
        </div>
        <h1 className="m-0 font-serif text-[56px] font-normal leading-[1.08] max-md:text-[40px]">
          In the arcade today
        </h1>
        <p className="mx-auto mt-[28px] max-w-[600px] text-[16.5px] leading-[1.8] text-body">
          A mix of independent retail, places to eat and drink, and the theatre
          upstairs — all under the Star Court's Art&nbsp;Deco roof. Wander in off
          Molesworth Street and take your time.
        </p>
      </div>

      {/* ===== CATEGORY JUMP ===== */}
      <div className="mx-auto flex max-w-[1180px] flex-wrap justify-center gap-3 px-5 md:px-10 pb-[10px] pt-6">
        {CATEGORIES.map((cat) => (
          <a
            key={cat.href}
            href={cat.href}
            className="rounded-[20px] border border-line-soft px-[18px] py-2 text-[12px] uppercase tracking-[0.08em] text-muted transition-colors hover:border-brass hover:text-brass"
          >
            {cat.label}
          </a>
        ))}
      </div>

      {/* ===== RETAIL ===== */}
      <div
        id="retail"
        className="mx-auto max-w-[1180px] scroll-mt-[90px] px-5 md:px-10 pb-[10px] pt-[50px]"
      >
        <SectionHeading title="Shops & retail" />
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
          {RETAIL.map((shop) => (
            <ShopCard key={shop.name} shop={shop} />
          ))}
        </div>
      </div>

      {/* ===== EAT ===== */}
      <div
        id="eat"
        className="mx-auto max-w-[1180px] scroll-mt-[90px] px-5 md:px-10 pb-[10px] pt-[50px]"
      >
        <SectionHeading title="Cafés & eateries" />
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
          {EAT.map((shop) => (
            <ShopCard key={shop.name} shop={shop} />
          ))}
        </div>
      </div>

      {/* ===== THEATRE ===== */}
      <div id="theatre" className="mt-14 scroll-mt-[90px] bg-cta text-cta-body">
        <div className="mx-auto grid max-w-[1180px] grid-cols-2 items-center gap-14 px-5 md:px-10 py-[66px] max-md:grid-cols-1 max-md:gap-8">
          <div>
            <div className="mb-5 text-[12px] uppercase tracking-[0.28em] text-brass-bright">
              Upstairs
            </div>
            <h2 className="mb-5 mt-0 font-serif text-[38px] font-normal text-cta-heading">
              The theatre
            </h2>
            <p className="mb-4 text-[16px] leading-[1.8] text-cta-body-2">
              Above the arcade, the Star Court's original auditorium lives on as
              a home for art-house film, festivals and live performance — a
              working picture theatre a century after the first screening.
            </p>
            <p className="m-0 text-[14px] leading-[1.7] text-cta-note">
              Session times and events change regularly. Check the noticeboard
              in the arcade or ask at the box office.
            </p>
          </div>
          <Placeholder className="h-[320px] rounded-[3px] bg-ph-bg-dark text-ph-fg-dark">
            PHOTO — the theatre auditorium &amp; screen
          </Placeholder>
        </div>
      </div>

      {/* ===== TENANT NOTE ===== */}
      <div className="mx-auto max-w-[900px] px-5 md:px-10 py-14 text-center">
        <p className="m-0 text-[15px] italic leading-[1.7] text-muted-2">
          Shop names and details shown here are placeholders. Send through the
          current tenant list and we'll make the directory accurate — logos,
          hours and all.
        </p>
      </div>
    </>
  )
}
