import { useParams } from 'react-router-dom'

export function MedicalTimelinePage() {
  const { memberId } = useParams()

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-2">Medical Timeline</h1>
      <p style={{ color: 'var(--color-on-surface-variant)' }} className="text-sm">
        Chronological health history for member: <strong>{memberId}</strong>
      </p>
    </div>
  )
}
