import { Outlet } from 'react-router-dom'
import { BottomNav } from './BottomNav'

export function PageShell() {
  return (
    <div className="min-h-dvh">
      <Outlet />
      <BottomNav />
    </div>
  )
}
