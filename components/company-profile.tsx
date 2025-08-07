'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TaskCard } from '@/components/task-card'
import { Building, Globe, Users, TrendingUp, Target, Star, ExternalLink, ArrowLeft } from 'lucide-react'

interface CompanyProfileProps {
  companyId: string
}

// Mock data
const mockCompany = {
  id: '1',
  name: 'TechCorp',
  logo: '🏢',
  description: 'TechCorp is a leading technology solutions provider specializing in innovative software development and digital transformation. We help businesses leverage cutting-edge technology to solve complex challenges and drive growth. Our team of expert developers, designers, and strategists work together to deliver exceptional results for our clients.',
  industry: 'Technology',
  website: 'https://techcorp.com',
  hiringRate: 85,
  totalTasks: 25,
  totalSubmissions: 156,
  isTopRecruiter: true,
  stats: {
    totalTasksPosted: 25,
    hiringRate: 85,
    totalSubmissionsReceived: 156,
    averageRating: 4.8
  },
  currentTasks: [
    {
      id: '1',
      title: 'E-commerce Mobile App Design',
      reward: '$500',
      deadline: new Date('2024-12-15'),
      tags: ['UI/UX', 'Mobile', 'React Native'],
      description: 'Design a modern e-commerce mobile application with intuitive user experience.'
    },
    {
      id: '2',
      title: 'Data Analysis Dashboard',
      reward: '$750',
      deadline: new Date('2024-12-20'),
      tags: ['Data Science', 'Python', 'Visualization'],
      description: 'Create an interactive dashboard for business intelligence and analytics.'
    },
    {
      id: '3',
      title: 'Marketing Automation Tool',
      reward: '$600',
      deadline: new Date('2024-12-30'),
      tags: ['Backend', 'API', 'Automation'],
      description: 'Build a comprehensive marketing automation platform for email campaigns.'
    }
  ]
}

export function CompanyProfile({ companyId }: CompanyProfileProps) {
  const [company] = useState(mockCompany)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/student/companies" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Companies
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                {/* Company Header */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">{company.logo}</span>
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{company.name}</h1>
                  <p className="text-gray-600 mb-3">{company.industry}</p>
                  {company.isTopRecruiter && (
                    <Badge className="mb-4">
                      <Star className="h-3 w-3 mr-1" />
                      Top Recruiter
                    </Badge>
                  )}
                </div>

                {/* Company Description */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">About</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {company.description}
                  </p>
                </div>

                {/* Website Link */}
                <div className="mb-6">
                  <Button variant="outline" className="w-full" asChild>
                    <a href={company.website} target="_blank" rel="noopener noreferrer">
                      <Globe className="h-4 w-4 mr-2" />
                      Visit Website
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>

                {/* Stats */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Company Stats</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Target className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-sm text-gray-600">Total Tasks Posted</span>
                      </div>
                      <span className="font-semibold text-gray-900">{company.stats.totalTasksPosted}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-sm text-gray-600">Hiring Rate</span>
                      </div>
                      <span className="font-semibold text-green-600">{company.stats.hiringRate}%</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-purple-600 mr-2" />
                        <span className="text-sm text-gray-600">Total Submissions</span>
                      </div>
                      <span className="font-semibold text-gray-900">{company.stats.totalSubmissionsReceived}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-600 mr-2" />
                        <span className="text-sm text-gray-600">Average Rating</span>
                      </div>
                      <span className="font-semibold text-gray-900">{company.stats.averageRating}/5</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Current Open Challenges */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Current Open Challenges
                </CardTitle>
              </CardHeader>
              <CardContent>
                {company.currentTasks.length > 0 ? (
                  <div className="grid gap-6">
                    {company.currentTasks.map((task) => (
                      <TaskCard key={task.id} task={task} showApplyButton company={company.name} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">No open challenges at the moment</p>
                    <p className="text-gray-400 mt-2">Check back later for new opportunities</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
