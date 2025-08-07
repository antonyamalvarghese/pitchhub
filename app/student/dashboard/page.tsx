import { StudentDashboard } from '@/components/student-dashboard'
import { ProtectedRoute } from '@/components/protected-route'

export default function StudentDashboardPage() {
  return (
    <ProtectedRoute requiredRole="student">
      <StudentDashboard />
    </ProtectedRoute>
  )
}
