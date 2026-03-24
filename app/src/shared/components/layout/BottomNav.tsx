import { NavLink } from 'react-router-dom'

type NavItem = {
  to: string
  icon: string
  label: string
}

const NAV_ITEMS: NavItem[] = [
  { to: '/',          icon: 'grid_view',   label: 'HUB'      },
  { to: '/timeline',  icon: 'auto_stories', label: 'TIMELINE' },
  { to: '/settings',  icon: 'settings',    label: 'SETTINGS' },
]

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 backdrop-blur-xl bg-background/85 rounded-t-xl border-t border-primary/5 shadow-[0_-4px_40px_rgba(22,29,28,0.04)]">
      {NAV_ITEMS.map(({ to, icon, label }) => (
        <NavLink
          key={to}
          to={to}
          end
          className={({ isActive }) =>
            [
              'flex flex-col items-center justify-center px-6 py-2 rounded-full transition-all duration-300 ease-out active:scale-90',
              isActive
                ? 'bg-primary-container/20 text-primary'
                : 'text-on-surface/40 hover:text-primary',
            ].join(' ')
          }
        >
          {({ isActive }) => (
            <>
              <span
                className="material-symbols-outlined"
                style={{
                  fontVariationSettings: isActive
                    ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                    : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                }}
              >
                {icon}
              </span>
              <span className="font-label text-[10px] uppercase tracking-widest font-bold mt-1">
                {label}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
