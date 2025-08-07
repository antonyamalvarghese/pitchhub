'use client'

import { useState } from 'react'
import Link from 'next/link'
import { DashboardLayout } from '@/components/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TaskCard } from '@/components/task-card'
import { CompanyCard } from '@/components/company-card'
import { LeaderboardTile } from '@/components/leaderboard-tile'
import { Trophy, Target, Calendar, Search, TrendingUp, BookOpen, Code, Users, Star, ArrowRight } from 'lucide-react'

// Mock data
const myTasks = [
  {
    id: '1',
    title: 'E-commerce Mobile App Design',
    company: 'TechCorp',
    status: 'in-progress',
    deadline: new Date('2024-12-15'),
    reward: '$500',
    progress: 60
  },
  {
    id: '2',
    title: 'Data Analysis Dashboard',
    company: 'DataFlow',
    status: 'completed',
    deadline: new Date('2024-11-20'),
    reward: '$750',
    progress: 100
  }
]

const suggestedOpportunities = {
  courses: [
    { title: 'Advanced React Development', provider: 'TechAcademy', duration: '6 weeks' },
    { title: 'Machine Learning Fundamentals', provider: 'DataScience Pro', duration: '8 weeks' }
  ],
  hackathons: [
    { title: 'AI Innovation Challenge', organizer: 'TechHub', date: '2024-12-01', prize: '$10,000' },
    { title: 'Sustainability Hackathon', organizer: 'GreenTech', date: '2024-12-15', prize: '$5,000' }
  ],
  tasks: [
    {
      id: '3',
      title: 'Social Media Analytics Tool',
      company: 'MarketingPro',
      reward: '$600',
      deadline: new Date('2024-12-20'),
      tags: ['Analytics', 'React', 'API']
    },
    {
      id: '4',
      title: 'Inventory Management System',
      company: 'RetailTech',
      reward: '$800',
      deadline: new Date('2024-12-25'),
      tags: ['Backend', 'Database', 'Python']
    }
  ]
}

const topCompanies = [
  {
    id: '1',
    name: 'TechCorp',
    logo: '🏢',
    description: 'Leading technology solutions provider',
    hiringRate: 85,
    isTopRecruiter: true
  },
  {
    id: '2',
    name: 'InnovateLab',
    logo: '🚀',
    description: 'Innovation and startup incubator',
    hiringRate: 92,
    isTopRecruiter: true
  },
  {
    id: '3',
    name: 'DataFlow',
    logo: '📊',
    description: 'Data analytics and insights company',
    hiringRate: 78,
    isTopRecruiter: false
  }
]

export function StudentDashboard() {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentRank] = useState(42)
  const [currentScore] = useState(1250)

  return (
    <DashboardLayout userType="student">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Welcome back, John! 👋</h1>
          <p className="text-blue-100">Ready to tackle some exciting challenges today?</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Target className="h-8 w-8 text-blue-600" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-600">Active Tasks</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Trophy className="h-8 w-8 text-yellow-600" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-600">Rank</p>
                  <p className="text-2xl font-bold text-gray-900">#{currentRank}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-green-600" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-600">Score</p>
                  <p className="text-2xl font-bold text-gray-900">{currentScore}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-purple-600" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* My Tasks */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  My Tasks
                </CardTitle>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/student/tasks">View All</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myTasks.map((task) => (
                    <div key={task.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{task.title}</h3>
                          <p className="text-sm text-gray-600">{task.company}</p>
                        </div>
                        <Badge variant={task.status === 'completed' ? 'default' : 'secondary'}>
                          {task.status === 'completed' ? 'Completed' : 'In Progress'}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span>Reward: {task.reward}</span>
                        <span>Due: {task.deadline.toLocaleDateString()}</span>
                      </div>
                      
                      {task.status === 'in-progress' && (
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${task.progress}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Suggested Opportunities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Suggested Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="tasks">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="tasks">Tasks</TabsTrigger>
                    <TabsTrigger value="courses">Courses</TabsTrigger>
                    <TabsTrigger value="hackathons">Hackathons</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="tasks" className="space-y-4">
                    {suggestedOpportunities.tasks.map((task) => (
                      <TaskCard key={task.id} task={task} />
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="courses" className="space-y-4">
                    {suggestedOpportunities.courses.map((course, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900">{course.title}</h3>
                        <p className="text-sm text-gray-600">{course.provider}</p>
                        <p className="text-sm text-gray-500">Duration: {course.duration}</p>
                      </div>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="hackathons" className="space-y-4">
                    {suggestedOpportunities.hackathons.map((hackathon, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900">{hackathon.title}</h3>
                        <p className="text-sm text-gray-600">{hackathon.organizer}</p>
                        <div className="flex justify-between text-sm text-gray-500 mt-2">
                          <span>Date: {hackathon.date}</span>
                          <span>Prize: {hackathon.prize}</span>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* My Ranking */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2" />
                  My Ranking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <LeaderboardTile 
                  rank={currentRank}
                  score={currentScore}
                  name="You"
                  isCurrentUser={true}
                />
                <Button variant="outline" className="w-full mt-4">
                  View Full Leaderboard
                </Button>
              </CardContent>
            </Card>

            {/* Explore Companies */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Explore Companies
                </CardTitle>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/student/companies">View All</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search companies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Top Companies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 mr-2" />
                  Top Companies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topCompanies.map((company) => (
                    <div key={company.id} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="text-2xl">{company.logo}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium text-gray-900 truncate">{company.name}</h3>
                          {company.isTopRecruiter && (
                            <Badge variant="secondary" className="text-xs">
                              Top Recruiter
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 truncate">{company.description}</p>
                        <p className="text-xs text-gray-500">Hiring rate: {company.hiringRate}%</p>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/company/${company.id}`}>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
