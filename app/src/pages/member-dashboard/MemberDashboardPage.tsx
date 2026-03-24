import { useParams } from 'react-router-dom'

export function MemberDashboardPage() {
  const { memberId } = useParams()

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-2">Member Dashboard</h1>
      <p style={{ color: 'var(--color-on-surface-variant)' }} className="text-sm">
        Viewing member: <strong>{memberId}</strong>
      </p>
    </div>
  )
}
