import { useParams } from 'react-router-dom'

export function AddRecordPage() {
  const { memberId } = useParams()

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-2">Add Record</h1>
      <p style={{ color: 'var(--color-on-surface-variant)' }} className="text-sm">
        Adding a new health record for member: <strong>{memberId}</strong>
      </p>
    </div>
  )
}
