'use client'

import { useState } from 'react'
import { DashboardLayout } from '@/components/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { TaskCard } from '@/components/task-card'
import { FilterSidebar } from '@/components/filter-sidebar'
import { Search, Filter, SlidersHorizontal } from 'lucide-react'

// Mock data
const mockTasks = [
  {
    id: '1',
    title: 'E-commerce Mobile App Design',
    company: 'TechCorp',
    reward: '$500',
    deadline: new Date('2024-12-15'),
    tags: ['UI/UX', 'Mobile', 'React Native'],
    description: 'Design a modern e-commerce mobile application with intuitive user experience.'
  },
  {
    id: '2',
    title: 'Data Analysis Dashboard',
    company: 'DataFlow',
    reward: '$750',
    deadline: new Date('2024-12-20'),
    tags: ['Data Science', 'Python', 'Visualization'],
    description: 'Create an interactive dashboard for business intelligence and analytics.'
  },
  {
    id: '3',
    title: 'Social Media Marketing Campaign',
    company: 'MarketingPro',
    reward: '$400',
    deadline: new Date('2024-12-10'),
    tags: ['Marketing', 'Social Media', 'Content'],
    description: 'Develop a comprehensive social media marketing strategy and campaign.'
  },
  {
    id: '4',
    title: 'Inventory Management System',
    company: 'RetailTech',
    reward: '$800',
    deadline: new Date('2024-12-25'),
    tags: ['Backend', 'Database', 'Python'],
    description: 'Build a robust inventory management system for retail operations.'
  }
]

const companies = ['All Companies', 'TechCorp', 'DataFlow', 'MarketingPro', 'RetailTech']
const categories = ['All Categories', 'Web Development', 'Mobile Development', 'Data Science', 'UI/UX Design', 'Marketing']
const rewardRanges = ['All Rewards', '$0-$300', '$300-$600', '$600-$1000', '$1000+']

export function TaskBrowser() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCompany, setSelectedCompany] = useState('All Companies')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [selectedReward, setSelectedReward] = useState('All Rewards')
  const [showFilters, setShowFilters] = useState(false)
  const [tasks] = useState(mockTasks)

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCompany = selectedCompany === 'All Companies' || task.company === selectedCompany
    const matchesCategory = selectedCategory === 'All Categories' || 
                           task.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase().replace(' development', '').replace(' design', '')))
    
    return matchesSearch && matchesCompany && matchesCategory
  })

  return (
    <DashboardLayout userType="student">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Tasks</h1>
          <p className="text-gray-600">Discover exciting opportunities to showcase your skills</p>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search tasks, companies, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Quick Filters */}
              <div className="flex flex-col sm:flex-row gap-2">
                <Select value={selectedCompany} onValueChange={setSelectedCompany}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {companies.map((company) => (
                      <SelectItem key={company} value={company}>
                        {company}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedReward} onValueChange={setSelectedReward}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {rewardRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-6">
          {/* Sidebar Filters (Desktop) */}
          {showFilters && (
            <div className="w-64 lg:block hidden">
              <FilterSidebar />
            </div>
          )}

          {/* Task Results */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600">
                Showing {filteredTasks.length} task{filteredTasks.length !== 1 ? 's' : ''}
              </p>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="deadline">Deadline Soon</SelectItem>
                  <SelectItem value="reward-high">Highest Reward</SelectItem>
                  <SelectItem value="reward-low">Lowest Reward</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Task Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredTasks.map((task) => (
                <TaskCard key={task.id} task={task} showApplyButton />
              ))}
            </div>

            {filteredTasks.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No tasks found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
