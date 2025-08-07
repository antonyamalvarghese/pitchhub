import { ChallengeList } from '@/components/challenge-list'

export default function ChallengesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Challenges</h1>
        <p className="text-gray-600">Discover real-world problems to solve and showcase your skills</p>
      </div>
      <ChallengeList />
    </div>
  )
}
