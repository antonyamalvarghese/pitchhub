import { SolutionSubmission } from '@/components/solution-submission'

export default function SubmitSolutionPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <SolutionSubmission challengeId={params.id} />
    </div>
  )
}
