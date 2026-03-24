import { Routes, Route } from 'react-router-dom'
import { PageShell } from '../shared/components/layout/PageShell'
import { FamilyHubPage } from '../pages/family-hub/FamilyHubPage'
import { MemberDashboardPage } from '../pages/member-dashboard/MemberDashboardPage'
import { MedicalTimelinePage } from '../pages/medical-timeline/MedicalTimelinePage'
import { AddRecordPage } from '../pages/add-record/AddRecordPage'

export function Router() {
  return (
    <Routes>
      <Route element={<PageShell />}>
        <Route index element={<FamilyHubPage />} />
        <Route path="member/:memberId" element={<MemberDashboardPage />} />
        <Route path="member/:memberId/timeline" element={<MedicalTimelinePage />} />
        <Route path="member/:memberId/add-record" element={<AddRecordPage />} />
      </Route>
    </Routes>
  )
}
