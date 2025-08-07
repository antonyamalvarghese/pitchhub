import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CountdownTimer } from '@/components/countdown-timer'
import { Building, Users, Calendar } from 'lucide-react'

interface Challenge {
  id: string
  title: string
  company: string
  description: string
  deadline: Date
  tags: string[]
  submissionCount: number
}

interface ChallengeCardProps {
  challenge: Challenge
}

export function ChallengeCard({ challenge }: ChallengeCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg line-clamp-2">{challenge.title}</CardTitle>
        <div className="flex items-center text-sm text-gray-600">
          <Building className="h-4 w-4 mr-1" />
          {challenge.company}
        </div>
      </CardHeader>
      
      <CardContent className="flex-1">
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {challenge.description}
        </p>
        
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
            <CountdownTimer deadline={challenge.deadline} />
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <Users className="h-4 w-4 mr-1" />
            {challenge.submissionCount} submissions
          </div>
          
          <div className="flex flex-wrap gap-1">
            {challenge.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {challenge.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{challenge.tags.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/challenges/${challenge.id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
