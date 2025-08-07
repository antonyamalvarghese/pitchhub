import { CompanyDashboard } from '@/components/company-dashboard'
import { ProtectedRoute } from '@/components/protected-route'

export default function DashboardPage() {
  return (
    <ProtectedRoute requiredRole="company">
      <div className="container mx-auto px-4 py-8">
        <CompanyDashboard />
      </div>
    </ProtectedRoute>
  )
}
