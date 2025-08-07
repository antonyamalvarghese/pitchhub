import { TaskBrowser } from '@/components/task-browser'
import { ProtectedRoute } from '@/components/protected-route'

export default function TaskBrowserPage() {
  return (
    <ProtectedRoute requiredRole="student">
      <TaskBrowser />
    </ProtectedRoute>
  )
}
