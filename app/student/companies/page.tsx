import { ExploreCompanies } from '@/components/explore-companies'
import { ProtectedRoute } from '@/components/protected-route'

export default function ExploreCompaniesPage() {
  return (
    <ProtectedRoute requiredRole="student">
      <ExploreCompanies />
    </ProtectedRoute>
  )
}
