import { CompanyDashboard } from '@/components/company-dashboard'
import { ProtectedRoute } from '@/components/protected-route'

export default function CompanyDashboardPage() {
  return (
    <ProtectedRoute requiredRole="company">
      <CompanyDashboard />
    </ProtectedRoute>
  )
}
