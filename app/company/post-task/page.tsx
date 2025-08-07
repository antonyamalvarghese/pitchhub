import { PostTaskForm } from '@/components/post-task-form'
import { ProtectedRoute } from '@/components/protected-route'

export default function PostTaskPage() {
  return (
    <ProtectedRoute requiredRole="company">
      <PostTaskForm />
    </ProtectedRoute>
  )
}
