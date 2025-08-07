'use client'

import { useState } from 'react'
import Link from 'next/link'
import { DashboardLayout } from '@/components/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus, Eye, Calendar, Users, TrendingUp, Target, Award, BarChart3 } from 'lucide-react'

// Mock data
const postedTasks = [
  {
    id: '1',
    title: 'E-commerce Mobile App Design',
    deadline: new Date('2024-12-15'),
    reward: '$500',
    submissionCount: 12,
    status: 'active'
  },
  {
    id: '2',
    title: 'Data Analysis Dashboard',
    deadline: new Date('2024-11-20'),
    reward: '$750',
    submissionCount: 8,
    status: 'completed'
  },
  {
    id: '3',
    title: 'Marketing Automation Tool',
    deadline: new Date('2024-12-30'),
    reward: '$600',
    submissionCount: 15,
    status: 'active'
  }
]

const analytics = {
  totalPosts: 25,
  hiresMade: 18,
  avgSubmissionQuality: 4.2,
  totalSubmissions: 156
}

export function CompanyDashboard() {
  const [tasks] = useState(postedTasks)

  return (
    <DashboardLayout userType="company">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🏢</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-1">Welcome back, TechCorp! 🚀</h1>
              <p className="text-green-100">Discover amazing talent and grow your team</p>
            </div>
          </div>
        </div>

        {/* Analytics Cards */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Target className="h-8 w-8 text-blue-600" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-600">Total Posts</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.totalPosts}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-green-600" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-600">Hires Made</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.hiresMade}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Award className="h-8 w-8 text-yellow-600" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-600">Avg. Quality</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.avgSubmissionQuality}/5</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <BarChart3 className="h-8 w-8 text-purple-600" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-600">Submissions</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.totalSubmissions}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* My Posted Tasks */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  My Posted Tasks
                </CardTitle>
                <Button asChild>
                  <Link href="/company/post-task">
                    <Plus className="h-4 w-4 mr-2" />
                    Post a Task
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tasks.map((task) => (
                    <div key={task.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{task.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              Due: {task.deadline.toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {task.submissionCount} submissions
                            </div>
                            <span className="font-medium text-green-600">{task.reward}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={task.status === 'active' ? 'default' : 'secondary'}>
                            {task.status === 'active' ? 'Active' : 'Completed'}
                          </Badge>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View Submissions
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Company Profile */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Company Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🏢</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">TechCorp</h3>
                      <p className="text-sm text-gray-600">Technology Solutions</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Website:</span>
                      <a href="https://techcorp.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        techcorp.com
                      </a>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Industry:</span>
                      <span className="text-gray-900">Technology</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Hiring Rate:</span>
                      <span className="text-green-600 font-medium">85%</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Description:</p>
                    <p className="text-sm text-gray-900">
                      Leading technology solutions provider specializing in innovative software development and digital transformation.
                    </p>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/company/post-task">
                      <Plus className="h-4 w-4 mr-2" />
                      Post New Task
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Eye className="h-4 w-4 mr-2" />
                    Review Submissions
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
