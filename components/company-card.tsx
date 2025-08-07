import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Building, Globe, TrendingUp, Target, Star } from 'lucide-react'

interface Company {
  id: string
  name: string
  logo: string
  description: string
  industry: string
  hiringRate: number
  totalTasks: number
  website: string
  isTopRecruiter: boolean
}

interface CompanyCardProps {
  company: Company
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start space-x-3">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-2xl">{company.logo}</span>
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg truncate">{company.name}</CardTitle>
            <p className="text-sm text-gray-600">{company.industry}</p>
            {company.isTopRecruiter && (
              <Badge variant="secondary" className="mt-1">
                <Star className="h-3 w-3 mr-1" />
                Top Recruiter
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1">
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {company.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-500">
              <TrendingUp className="h-4 w-4 mr-1" />
              Hiring Rate
            </div>
            <span className="font-medium text-green-600">{company.hiringRate}%</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-500">
              <Target className="h-4 w-4 mr-1" />
              Active Tasks
            </div>
            <span className="font-medium text-gray-900">{company.totalTasks}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/company/${company.id}`}>
            View Profile
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
