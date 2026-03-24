// ─── Family Hub ──────────────────────────────────────────────────────────────
// Home screen: family member carousel, alert card, vitals grid, log vital CTA.
// All data is static/dummy until the data layer is wired up.

// ── Types ─────────────────────────────────────────────────────────────────────

type FamilyMember = {
  id: string
  name: string
  initials: string
  isActive: boolean
}

type VitalCard = {
  icon: string
  value: string
  unit: string
  label: string
  badge: string
  iconBg: string
  iconColor: string
  wide?: boolean
}

// ── Dummy Data ─────────────────────────────────────────────────────────────────

const FAMILY_MEMBERS: FamilyMember[] = [
  { id: '1', name: 'Leo',  initials: 'L', isActive: true  },
  { id: '2', name: 'Maya', initials: 'M', isActive: false },
  { id: '3', name: 'Sam',  initials: 'S', isActive: false },
]

const VITALS: VitalCard[] = [
  {
    icon: 'device_thermostat',
    value: '98.6',
    unit: '°F',
    label: 'Temperature',
    badge: 'Today',
    iconBg: 'bg-secondary-container/30',
    iconColor: 'text-on-secondary-container',
  },
  {
    icon: 'monitor_weight',
    value: '42',
    unit: 'lbs',
    label: 'Weight',
    badge: '2D ago',
    iconBg: 'bg-tertiary-fixed/30',
    iconColor: 'text-on-tertiary-fixed-variant',
  },
  {
    icon: 'straighten',
    value: '41',
    unit: 'in',
    label: 'Height',
    badge: 'Last month',
    iconBg: 'bg-primary-container/20',
    iconColor: 'text-primary',
    wide: true,
  },
]

// ── Sub-components ─────────────────────────────────────────────────────────────

function MemberAvatar({ member }: { member: FamilyMember }) {
  const ring = member.isActive
    ? 'bg-gradient-to-tr from-primary to-primary-container'
    : 'bg-surface-container-highest'

  return (
    <button className="flex flex-col items-center gap-2 flex-shrink-0 group active:scale-95 transition-transform">
      <div className={`w-16 h-16 rounded-full p-1 ${ring} shadow-sm`}>
        <div className="w-full h-full rounded-full bg-surface-container-low border-2 border-white flex items-center justify-center">
          <span className="font-headline text-lg font-semibold text-primary">
            {member.initials}
          </span>
        </div>
      </div>
      <span className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">
        {member.name}
      </span>
    </button>
  )
}

function AddMemberButton() {
  return (
    <button className="flex flex-col items-center gap-2 flex-shrink-0 group active:scale-95 transition-transform">
      <div className="w-16 h-16 rounded-full border-2 border-dashed border-outline-variant flex items-center justify-center text-outline-variant">
        <span className="material-symbols-outlined">add</span>
      </div>
      <span className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">
        Add
      </span>
    </button>
  )
}

function VitalCardItem({ card }: { card: VitalCard }) {
  if (card.wide) {
    return (
      <div className="col-span-2 bg-surface-container-lowest p-5 rounded-lg shadow-[0_4px_20px_rgba(22,29,28,0.03)] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-full ${card.iconBg} flex items-center justify-center ${card.iconColor}`}>
            <span className="material-symbols-outlined">{card.icon}</span>
          </div>
          <div>
            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
              {card.badge}
            </p>
            <p className="text-sm font-medium text-on-surface-variant">{card.label}</p>
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold font-headline text-primary">{card.value}</span>
          <span className="text-sm font-medium text-on-surface-variant">{card.unit}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-surface-container-lowest p-5 rounded-lg shadow-[0_4px_20px_rgba(22,29,28,0.03)] flex flex-col justify-between h-40">
      <div className="flex justify-between items-start">
        <div className={`w-10 h-10 rounded-full ${card.iconBg} flex items-center justify-center ${card.iconColor}`}>
          <span className="material-symbols-outlined">{card.icon}</span>
        </div>
        <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
          {card.badge}
        </span>
      </div>
      <div className="mt-4">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold font-headline text-primary">{card.value}</span>
          <span className="text-sm font-medium text-on-surface-variant">{card.unit}</span>
        </div>
        <p className="text-xs text-on-surface-variant font-medium mt-1">{card.label}</p>
      </div>
    </div>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────────

export function FamilyHubPage() {
  return (
    <div className="pb-32">

      {/* ── 1. Top App Bar ── */}
      <header className="sticky top-0 z-50 flex justify-between items-center w-full px-6 py-4 backdrop-blur-md bg-background/80">
        <div className="flex items-center gap-3">
          {/* User avatar — initials placeholder until auth is wired */}
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center border-2 border-primary-container shadow-sm">
            <span className="font-headline text-sm font-semibold text-on-primary-container">S</span>
          </div>
          <h1 className="font-headline text-2xl font-semibold leading-tight text-primary tracking-tight">
            Good morning, Sarah
          </h1>
        </div>
        <button
          aria-label="Notifications"
          className="material-symbols-outlined text-primary hover:opacity-80 active:scale-95 transition-all duration-200"
        >
          notifications
        </button>
      </header>

      <main className="px-6 space-y-8 mt-4">

        {/* ── 2. Family Member Carousel ── */}
        <section aria-label="Family members">
          <div className="flex gap-5 overflow-x-auto no-scrollbar py-2">
            {FAMILY_MEMBERS.map((member) => (
              <MemberAvatar key={member.id} member={member} />
            ))}
            <AddMemberButton />
          </div>
        </section>

        {/* ── 3. Needs Attention Alert Card ── */}
        <section aria-label="Needs attention">
          <div className="bg-primary-container/10 rounded-xl p-6 relative overflow-hidden">
            {/* Decorative blurred circle */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none" />

            <div className="flex justify-between items-start relative z-10">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    warning
                  </span>
                  <h3 className="font-headline text-lg">Needs Attention</h3>
                </div>
                <p className="text-on-surface-variant text-sm max-w-[200px]">
                  Maya's vaccination records are due for an update soon.
                </p>
              </div>
              <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-medium text-sm shadow-sm active:scale-95 transition-transform">
                View
              </button>
            </div>
          </div>
        </section>

        {/* ── 4. Latest Vitals Grid ── */}
        <section aria-label="Latest vitals">
          <h2 className="text-xl font-headline text-on-surface mb-4">Latest Vitals</h2>
          <div className="grid grid-cols-2 gap-4">
            {VITALS.map((card) => (
              <VitalCardItem key={card.label} card={card} />
            ))}
          </div>
        </section>

        {/* ── 5. Log Vital CTA ── */}
        <section aria-label="Log a vital">
          <button className="w-full bg-surface-container-high rounded-xl p-8 flex flex-col items-center justify-center gap-4 border-2 border-dashed border-outline-variant/30 active:scale-95 transition-transform">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary flex items-center justify-center shadow-[0_8px_40px_rgba(0,106,99,0.25)]">
              <span className="material-symbols-outlined text-3xl">add</span>
            </div>
            <div className="text-center">
              <h3 className="font-headline text-lg text-primary">Log Vital</h3>
              <p className="text-sm text-on-surface-variant">Record a new health metric</p>
            </div>
          </button>
        </section>

      </main>
    </div>
  )
}
