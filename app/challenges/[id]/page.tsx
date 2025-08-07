import { ChallengeDetail } from '@/components/challenge-detail'

export default function ChallengeDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <ChallengeDetail challengeId={params.id} />
    </div>
  )
}
