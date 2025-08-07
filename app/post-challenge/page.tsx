import { PostChallengeForm } from '@/components/post-challenge-form'
import { ProtectedRoute } from '@/components/protected-route'

export default function PostChallengePage() {
  return (
    <ProtectedRoute requiredRole="company">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Post a Challenge</h1>
          <p className="text-gray-600">Create a new challenge for students to solve</p>
        </div>
        <PostChallengeForm />
      </div>
    </ProtectedRoute>
  )
}
