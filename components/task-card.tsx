import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CountdownTimer } from '@/components/countdown-timer'
import { Building, Calendar, DollarSign, Eye } from 'lucide-react'

interface Task {
  id: string
  title: string
  company?: string
  description: string
  reward: string
  deadline: Date
  tags: string[]
}

interface TaskCardProps {
  task: Task
  showApplyButton?: boolean
  company?: string
}

export function TaskCard({ task, showApplyButton = false, company }: TaskCardProps) {
  const displayCompany = company || task.company

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg line-clamp-2">{task.title}</CardTitle>
        {displayCompany && (
          <div className="flex items-center text-sm text-gray-600">
            <Building className="h-4 w-4 mr-1" />
            {displayCompany}
          </div>
        )}
      </CardHeader>
      
      <CardContent className="flex-1">
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {task.description}
        </p>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-green-600 font-medium">
              <DollarSign className="h-4 w-4 mr-1" />
              {task.reward}
            </div>
            <div className="flex items-center text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              <CountdownTimer deadline={task.deadline} />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1">
            {task.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {task.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{task.tags.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        {showApplyButton ? (
          <Button className="w-full">
            Apply Now
          </Button>
        ) : (
          <Button variant="outline" className="w-full">
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
